export interface IAuthor {
    objectId: string
    name: string
    email: string
}

export interface IBlog {
    objectId: string
    title: string
    category: string
    content: string
    thumbnail: string
    created: number
    author?: IAuthor | null
}

export interface BlogInput {
    title: string
    category: string
    content: string
    thumbnail: string
}