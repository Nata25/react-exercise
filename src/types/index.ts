export interface IUser {
  id: number,
  name: string,
  email: string,
  phone: string
}

export interface IPost {
  id: number,
  name: string,
  title: string,
  text: string,
  date: string
}

export interface IComment {
  id: number,
  name: string,
  text: string,
  date: string
}

export interface InfoCardItem extends IUser, IPost, IComment {}


export interface DataObject extends InfoCardItem {
  [id: string]: string | number
}

export type ParamsObject = {
  [key: string]: string
}

