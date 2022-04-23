import React from 'react'
import { Link } from "react-router-dom";
export const gallery = () => {
  return (
    <div style={{textAlign:'center', display:'flex' , flexDirection:'column'}}> 
      <h1>Gallery  Page in here</h1>
      
      <Link to="/">Go to App Page</Link>
      <Link to="/about">Go to About Page</Link>
      
    </div>
  )
}

export default gallery