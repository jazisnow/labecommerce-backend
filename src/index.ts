import { start } from 'repl';
import {user, product,purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId} from './database'
import { ProductCategory, TProduct, TPurchase, TUser } from './types';
//e Response, sempre entre chaves {} 👇🏽
import  express, { Request, Response} from 'express'
//import do CORS 👇🏽
import cors from 'cors';
import path from 'path';


console.table(user)
console.table(product)
console.table(purchase)

// //exemplo de chamada: createUser("u003", "beltrano@email.com", "beltrano99")
console.table(createUser("u003", "beltrano@email.com", "beltrano99"))

// // exemplo de chamada: getAllUsers()
//console.table(getAllUsers())

// // exemplo de chamada: createProduct("p004", "Monitor HD", 800, PRODUCT_CATEGORY.ELECTRONICS)
//console.table(createProduct("p004", "Monitor HD", 800, ProductCategory.ELECTRONICS));

// // exemplo de chamada: getAllProducts()
//console.table(getAllProducts());

// // exemplo de chamada: getProductById("p004")
//console.table(getProductById("p004"));

// // exemplo de chamada: queryProductsByName("monitor")
//console.table(queryProductsByName("pla"));

// // exemplo de chamada: createPurchase("u003", "p004", 2, 1600)
//console.table(createPurchase("u003", "p004", 2, 1600))

// // exemplo de chamada: getAllPurchasesFromUserId("u003")
//console.table(getAllPurchasesFromUserId("u003"));


///////////////////////////////////////////////////APIs e Express////////////////////////////////////////////////////////
//criação do servidor express 👇🏽
const app = express();
//no formato json 👇🏽
app.use(express.json());-
//configuração do middleware que habilita o CORS 👇🏽
app.use(cors());
app.listen(3003, () => {
console.log("Servidor rodando na porta 3003");
});
//Crie um endpoint de teste
app.get('/ping', (req: Request, res: Response) => {
res.send('Pong!')
});

//Agora crie endpoints para automatizar a manipulação dos dados do arquivo database.ts. 
//Get All Users
app.get('/users',(req: Request, res: Response) => {
res.status(200).send(user)
})
//Get All Products
app.get('/products',(req: Request, res: Response)=> {
res.status(200).send(product)
})

//Search Product by name
app.get('/products/search', (req: Request, res: Response) => {
const q = req.query.q as string // forçamos a tipagem aqui*
const result: TProduct[] = product.filter(
(product) => product.name.toLowerCase().includes(q.toLowerCase()))
res.status(200).send(result)
})
////////////////////////////////typeScript2//////////////////////////////////////
//Exercício 1
//Create User
//method HTTP (POST),method HTTP (POST), body: id, email, password  status 201 "Cadastro realizado com sucesso"
app.post('/users', (req: Request, res: Response)=>{
const id = req.body.id as string
const email = req.body.email as string
const password = req.body.password as string
const newUser: TUser = {
    id,
    email,
    password
}
user.push(newUser)
res.status(201).send("Cadastro realizado com sucesso")
})

//Exercício 2
//Create Product 
//method HTTP (POST),path ("/products"), body: id, name, price, category.status 201 "Produto cadastrado com sucesso"
app.post('/products', (req: Request, res: Response)=>{
const id = req.body.id as string 
const name = req.body.name as string
const price = req.body.price as number
const category = req.body.category as string
const newProduct : TProduct = {
    id,
    name,
    price,
    category
}
product.push(newProduct)
res.status(201).send("Produto cadastrado com sucesso")
})
//Exercício 3
//Create Purchase
//method HTTP (POST), path ("/purchases"), body: userId, productId, quantity, totalPrice. status 201 "Compra realizada com sucesso"
app.post('/purchases',(req: Request, res: Response)=>{
const userId = req.body.userId as string
const productId = req.body.productId as string
const quantity = req.body.quantity as number
const totalPrice = req.body.totalPrice as number
const newPurchase: TPurchase = {
    userId,
    productId,
    quantity,
    totalPrice
}
purchase.push(newPurchase)
res.status(201).send("Compra realizada com sucesso")
})


////////////////////////////////////////////////Aprofundamento Express///////////////////////////////////////////////
//Exercicio 01
//Get Products by id
app.get("/product/:id", (req: Request, res: Response)=>{
const id:string = req.params.id 
const result: TProduct = product.find((item)=> item.id === id)
res.status(200).send("objeto product encontrado")
})

//Get User Purchases by User id
app.get("/user/:id/purchase", (req: Request, res: Response)=>{
    const userId:string = req.params.id
    const result: TPurchase = purchase.find((item)=> item.userId === userId)
    res.status(200).send(result)
})

//Exercício 02
//findIndex retorna apenas o valor do index 
//ao contrario do find que retorna {} inteiro
//splice remove numeros especificos de um []
//Delete User by id
app.delete("/user/:id", (req: Request, res:Response)=>{
    const id:string = req.params.id
    const index:number = user.findIndex((item)=> item.id === id)
    user.splice(index, 1)
    console.log(user);
    res.status(200).send("User apagado com sucesso")
})
//Delete Product by id
app.delete("/product/:id", (req: Request, res:Response)=>{
    const id:string = req.params.id
    const index:number = product.findIndex((item)=> item.id === id)
    user.splice(index, 1)
    console.log(product);
    res.status(200).send("Produto apagado com sucesso")
})

//Exercício 3
//Edit User by id
app.put("/user/:id", (req:Request, res:Response)=>{
    const id: string = req.params.id 
    const newEmail = req.body.newEmail
    const newPassword = req.body.newPassword
    const findUser:TUser = user.find((item)=>item.id === id) 
    console.log(findUser);
    findUser.email = newEmail || findUser.email
    findUser.password = newPassword || findUser.password
    console.log(findUser);
    res.status(200).send("Cadastro atualizado com sucesso")
})
//Edit Product by id
app.put("/product/:id", (req:Request, res:Response)=>{
    const id: string = req.params.id 
    const newName = req.body.newName
    const newPrice = req.body.newPrice
    const newCategory = req.body.newCategory
    const findProduct: TProduct = product.find((item)=> item.id === id)
    console.log(findProduct)
    findProduct.name = newName || findProduct.name
    findProduct.price = newPrice || findProduct.price
    findProduct.category = newCategory || findProduct.category
    console.log(findProduct);
    res.status(200).send("Produto atualizado com sucesso")
})

/////////////////////////////////////////////////////////////////////////////////////////
















