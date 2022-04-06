import React from 'react'

const NotesToast = ({text}) => {
  return (
    <div>
        <p className = {`snackbar cart-toast ${text.includes("added") ? "toast-added" :"toast-removed"}`}>Notes {text}</p>
    </div>
  )
}

export default NotesToast