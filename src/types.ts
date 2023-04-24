
export type TUser = {
    id: string,
    name: string,
    email: string,
    password: string,
    date: number
}
export type TProduct = {
    id:string,
    name:string,
    price:number,
    description:string,
    imageUrl:string
}
export type TPurchase = {
    id:string,
    buyer:string,
    totalPrice:number,
    createdAt:number,
    paid: boolean
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