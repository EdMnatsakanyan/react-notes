import axios from "axios";
import { INote, InputNote } from "../Types";

const Axios = axios.create({
    baseURL: "http://localhost:3000"
})

export const getAllNotes = async():Promise<INote[]> => {
    const response = await Axios.get('/notes')
    return response.data
}

export const addNote = async(note:InputNote):Promise<INote> => {
    const response = await Axios.post('/notes',note)
    return response.data
}

export const deleteNote = async(id:string):Promise<INote> => {
    const response = await Axios.delete('/notes/'+id)
    return response.data
}

export const editNote = async(id:string,note:InputNote):Promise<INote> => {
    const response = await Axios.put('/notes/'+id, note) 
    return response.data
}