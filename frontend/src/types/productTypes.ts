//Classes mapeadas do backend

export type ProductRequestDTO = {
    name:string
    description:string
    category:string
    imageUrl:string
    price:number
    amount:number
}

export type ProductUpdateDTO = {
    name:string
    description:string
    category:string
    imageUrl:string
    price:number
    amount:number
}

export type ProductResponseDTO = {
    id:number
    name:string
    description:string
    category:string
    imageUrl:string
    price:number
    amount:number
}

