import React from 'react'
import { useState } from 'react'

function Button() {
    
    const types= ['primary', 'danger', 'success']
    const [index, setIndex]= useState(2);

    const colors= {
        primary: 'yellow',
        danger: 'red',
        success:'green'
    }
  return (
    <div>
        <button style= {{
        backgroundColor: colors[types[index]]
    }}
    
    onClick={()=> setIndex((pre)=> (pre+1 )% types.length) }>
        
        Clicked</button>
        
        <p>{types[index]}</p>
        
        </div>
  )
}

export default Button