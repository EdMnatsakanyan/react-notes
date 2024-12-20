import { useReducer, useState } from 'react'

import { Notes } from './components/Notes'
import { reducer } from './context/reducer'
import { mainState } from './context/state'
import { NotesContext } from './context/contex'

function App() {
    const [state, dispatch] = useReducer(reducer, mainState)
  return (
    <>
      <NotesContext.Provider value={{state, dispatch}}>
        <Notes />
      </NotesContext.Provider>
    </> 
  )
}

export default App
