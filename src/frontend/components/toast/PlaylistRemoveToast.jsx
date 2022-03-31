import React from 'react'

const PlaylistRemoveToast = ({text}) => {
  return (
    <div>
        <p className = {`snackbar cart-toast ${text === "added to" ? "toast-added" :"toast-removed"}`}>Product {text}</p>
    </div>
  )
}

export default PlaylistRemoveToast