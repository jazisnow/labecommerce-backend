
export type TUser = {
    id: string,
    email: string,
    password: string
}
export type TProduct = {
    id:string,
    name:string,
    price:number,
    category:string
}
export type TPurchase = {
    userId:string,
    productId:string,
    quantity:number,
    totalPrice:number
}

// utilize um enum para definir pelo menos 3 categorias (você pode escolher, mas deixamos alguns exemplos abaixo)
// ACCESSORIES = "Acessórios",
// CLOTHES_AND_SHOES = "Roupas e calçados",
// ELECTRONICS = "Eletrônicos"
// Refatore o mock de products no database.ts

export enum ProductCategory{
    CONSOLE = "console",
    JOGOS = "jogos",
    ELECTRONICS = "eletrônicos"
}