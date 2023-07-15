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
    isPrivate: boolean
    likes: Array<LikeObject>
    tags: Array<string>
    createdAt: string
    updatedAt: string
    __v: number
    error?:boolean
    message?:string
  }
type LikeObject = {
  id:string,
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
  