import { Dispatch } from "react"

export interface INote {
    title:string
    content:string
    id:string
}

export interface IState{
    notes:INote[]
}
export type InputNote = Omit<INote,'id'|'cover'>

export enum redTypes{
    SET_NOTES,
    ADD_NOTE,
    DELETE_NOTE,
    EDIT_NOTE
}

export interface IAction{
    type:redTypes
    payload:unknown
}

export interface IContext{
    state:IState
    dispatch:Dispatch<IAction>
}