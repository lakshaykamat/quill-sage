export type TagOption = {
    value: string
    label: string
    color: string
    isFixed?: boolean
    isDisabled?: boolean
}

export type NavLink = {
    id:number
    name:string,
    state:string,
    icon:React.ReactElement,
    url:string
}


export type Folder = {
    id:number,
    name:string,
    notes:Note[]
}

export type Note = {
    id:number,
    title:string,
    description:string,
    date:string,
    likes:number,
    author:string
}