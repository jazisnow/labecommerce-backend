import { start } from 'repl';
import {user, product,purchase, createUser, getAllUsers, createProduct, getAllProducts, getProductById, queryProductsByName, createPurchase, getAllPurchasesFromUserId} from './database'
import { ProductCategory, TProduct, TPurchase, TUser } from './types';
//e Response, sempre entre chaves {} 👇🏽
import  express, { Request, Response} from 'express'
//import do CORS 👇🏽
import cors from 'cors';


console.table(user)
// console.table(product)
// console.table(purchase)

// //exemplo de chamada: createUser("u003", "beltrano@email.com", "beltrano99")
console.table(createUser("u003", "beltrano@email.com", "beltrano99"))

// // exemplo de chamada: getAllUsers()
console.table(getAllUsers())

// // exemplo de chamada: createProduct("p004", "Monitor HD", 800, PRODUCT_CATEGORY.ELECTRONICS)
console.table(createProduct("p004", "Monitor HD", 800, ProductCategory.ELECTRONICS));

// // exemplo de chamada: getAllProducts()
console.table(getAllProducts());

// // exemplo de chamada: getProductById("p004")
console.table(getProductById("p004"));

// // exemplo de chamada: queryProductsByName("monitor")
console.table(queryProductsByName("pla"));

// // exemplo de chamada: createPurchase("u003", "p004", 2, 1600)
console.table(createPurchase("u003", "p004", 2, 1600))

// // exemplo de chamada: getAllPurchasesFromUserId("u003")
console.table(getAllPurchasesFromUserId("u003"));


///////////////////////////////////APIs e Express///////////////////////////////////////////
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









