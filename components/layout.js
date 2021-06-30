import React from 'react';
import Nav from "./nav";

 
const layout = ({children}) => {
  return (
    <div>
      <Nav/>
      {children}
     
    </div>
  )
}

export default layout;