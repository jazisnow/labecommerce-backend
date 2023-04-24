// import { TUser, TProduct, TPurchase, ProductCategory } from "./types";

// export const user: TUser[] = [
// {
//     id: "01",
//     email: "jaziorcc@hotmail.com",
//     password: "naoSei123",
// },
// {
//     id: "02",
//     email: "helenaFairy@hotmail.com",
//     password: "euSei123",
// },
// ];

// export const product: TProduct[] = [
// {
//     id: "03",
//     name: "Playstion",
//     price: 5.0,
//     category: ProductCategory.CONSOLE,
// },
// {
//     id: "04",
//     name: "Resident Evil 4 remake",
//     price: 350,
//     category: ProductCategory.JOGOS,
// },
// ];

// export const purchase: TPurchase[] = [
// {
//     userId: "01",
//     productId: "03",
//     quantity: 50,
//     totalPrice: 250.0,
// },
// {
//     userId: "02",
//     productId: "04",
//     quantity: 40,
//     totalPrice: 14.000,
// },
// ];

// // createUser (cria uma nova pessoa na lista de users)
// // input: três parâmetros (id, email e password)
// // output: frase de sucesso ("Cadastro realizado com sucesso")
// export function createUser(id:string, email:string, password:string):string{
//     user.push({id, email, password})
//     return "Cadastro realizado com sucesso"
// }

// // getAllUsers (busca todas as pessoas da lista de users)
// // input: nenhum
// // output: lista atualizada de users
// export function getAllUsers():TUser[]{
//     return user
// }

// // createProduct (cria um novo produto na lista de products)
// // input: quatro parâmetros (id, name, price e category)
// // output: frase de sucesso ("Produto criado com sucesso")
// export function createProduct(id:string, name:string, price:number, category:string):string{
// product.push({id, name, price, category})
//     return "Produto adicionado com sucesso"  
// }

// // getAllProducts (busca todos os produtos da lista de products)
// // input: nenhum
// // output: lista atualizada de products
// export function getAllProducts():TProduct[]{
//     return product
// }

// // getProductById (busca por produtos baseado em um id da lista de products)
// // input: um parâmetro (idToSearch)
// // output: o produto encontrado ou undefined
// export function getProductById(idToSearch:string):TProduct | undefined{
//     return product.find((prod)=>prod.id === idToSearch)
// }

// // Product
// // queryProductsByName (busca por produtos baseado em um nome da lista de products)
// // input: um parâmetro (q)
// // q é a abreviação de query (termo de busca/consulta)
// // output: lista de produtos com nomes que contenham o termo de busca
// // extra: o resultado da busca deve ser case insensitive
// export function queryProductsByName(q:string):TProduct[]{
//     return product.filter((prod)=>prod.name.toLowerCase().includes(q.toLowerCase()))
// }

// // Purchase
// // createPurchase (cria uma nova compra na lista de purchases)
// // input: quatro parâmetros (userId, productId, quantity e totalPrice)
// // output: frase de sucesso ("Compra realizada com sucesso")
// export function createPurchase(userId:string, productId:string, quantity:number, totalPrice:number):string{
//     purchase.push({userId, productId, quantity, totalPrice})
//     return "Compra realizada com sucesso"
// }

// // getAllPurchasesFromUserId (busca todas as compras feitas baseado no id do usuário)
// // input: userIdToSearch
// // output: lista atualizada de compras nas quais o userId delas são do userIdToSearch
// export function getAllPurchasesFromUserId(userIdToSearch:string):TPurchase[] {
//     return purchase.filter((purchase)=> purchase.userId === userIdToSearch)
// }













