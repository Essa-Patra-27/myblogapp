
import React from 'react'

interface Category{
    name: string;
    path: string;
    bgcolor:string;
}
const categoriesCard=(data:Category)=> {
    const{name,bgcolor,path}=data
  return (
    <div style={{
        width:'300px',
        height:'200px',
        background:bgcolor,
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    }}
    >
        <p style={{
            color:"white",
            fontSize:"15px"

        }}
        ></p>
        </div>
  )
}

export default categoriesCard
