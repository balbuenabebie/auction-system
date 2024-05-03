import React from 'react'
import { Link } from "react-router-dom";

function error() {
  return (
    <div>
      <h3>Page Not Found, please check the  go back!</h3>
      <p>Go back to <Link to="/">Home</Link> page to continue</p>
    </div>
  )
}

export default error
