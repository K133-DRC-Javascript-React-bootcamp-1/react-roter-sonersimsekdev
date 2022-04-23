import React from 'react'
import { Link } from "react-router-dom";

export const about = () => {
  return (
    <div style={{textAlign:'center', display:'flex' , flexDirection:'column'}}> 
      <h1>About Page in here</h1>
      
      <Link to="/">Go to App Page</Link>
      <Link to="/gallery">Go to Gallery Page</Link>


    </div>
    
  )
}

export default about