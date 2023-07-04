export type TagOption = {
    value: string
    label: string
    color: string
    isFixed?: boolean
    isDisabled?: boolean
}

export type Folder = {
    id:number,
    name:string
}

export type Note = {
    id:number,
    title:string,
    description:string,
    date:string,
    likes:number,
    author:string
}