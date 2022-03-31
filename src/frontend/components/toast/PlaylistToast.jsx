import React from 'react'

const PlaylistToast = ({text}) => {
  return (
    <div>
        <p className = {`snackbar cart-toast ${text.includes("added")  ? "toast-added" :"toast-removed"}`}>Video {text}</p>
    </div>
  )
}

export default PlaylistToast