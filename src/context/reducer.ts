import { IAction, IState, redTypes } from "../Types"

export const reducer = (state:IState, action:IAction) => {
    switch(action.type){
        case redTypes.SET_NOTES:
            return {
                ...state,
                notes:action.payload 
            }
        case redTypes.ADD_NOTE:
            return {
                ...state,
                notes:[...state.notes, action.payload]
            }
        case redTypes.DELETE_NOTE:
            return {
                ...state,
                notes:[...state.notes.filter(note => note.id !== action.payload)]
            }
        case redTypes.EDIT_NOTE:
            return {
                ...state,
                notes:[...state.notes.map(item => item.id === action.payload.id ? action.payload : item)]
            }
    }
}