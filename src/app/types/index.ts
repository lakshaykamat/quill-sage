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

export type Tag = {
    id:number,
    name:string
}


export type Folder = {
    _id: string
    name: string
    notes: Note[]
    user_id: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  

export type Note = {
    _id: string
    user_id: string
    folderId: string
    title: string
    content: string
    author?:string
    isPrivate: boolean
    likes: Array<string>
    tags: Array<string>
    createdAt: string
    updatedAt: string
    __v: number
  }

export type User = {
    _id: string
    username: string
    avatar: string
    email: string
    googleId: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  