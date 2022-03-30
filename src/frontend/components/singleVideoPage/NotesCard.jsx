import axios from 'axios'
import React, {useState, useEffect}from 'react'
import {  useVideoContext, useAuthContext} from '../../context/index-context'

const NotesCard = ({videoId, serverNotes, setServerNotes}) => {
  const [userNotesData, setUserNotesData] = useState("")
  
  const { jwtToken } = useAuthContext()
  const { state, dispatch } = useVideoContext()
  const { notesData } = state

  const saveNotes = async () => {
    const isNotesAdded = notesData.find((ele) => ele._id === videoId)
    if(!isNotesAdded){
      try {
        const notesUpdateData = {_id:videoId,notes:serverNotes.notes}
        const response = await axios.post("/api/user/notes",{video: notesUpdateData},{headers:{authorization:jwtToken}})
        console.log(response.data.notes)
        dispatch({type:"SET_NOTES_DATA", payload: response.data.notes})
      }
      catch(e) {
        console.log(e)
      }
    }
    else {
      try {
        const response = await axios.post(`/api/user/notes/${videoId}`, {action:{type:"update", payload:serverNotes.notes}}, {headers:{authorization:jwtToken}})
        console.log(response.data)
        dispatch({type:"SET_NOTES_DATA", payload: response.data.notes})
          }
          catch(e) {
        console.log(e)
      }
    }
    
  }
  
   
  const deleteNotes = async () => {
    try {
      const response = await axios.delete(`/api/user/notes/${videoId}`, {headers:{authorization:jwtToken}})
      dispatch({type:"SET_NOTES_DATA", payload: response.data.notes})
      setServerNotes(() => ({notes:""}))
        }
        catch(e) {
      console.log(e)
    }
  }
  
  const updateNotesData = (e) => {
    setServerNotes(() => ({notes:e.target.value}))
  }
console.log(serverNotes.notes)
  return (
    <div>
        <p>Add Notes</p>
        <textarea rows="20" cols="20" onChange = {updateNotesData} value = {serverNotes.notes ? serverNotes.notes :""}></textarea>
        <button className = "btn outlined" onClick = {deleteNotes}>Delete Notes</button>
        <button className = "btn primary" onClick = {saveNotes}>Save Notes</button>
    </div>
  )
}

export default NotesCard