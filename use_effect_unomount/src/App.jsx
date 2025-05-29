import { useState,useEffect } from 'react'
import React  from 'react'


function App() {
  const [render,setRender]=useState(true)



useEffect(()=>{
setInterval(()=>{
 // setRender(prev=>!prev); 
 //setRender()  //updates the render..like !render
 setRender(false)
},3000)
},[]);


  return (
    <>
     {render?<MyComponent/>:
     <div>this is gone</div>}
    </>
  )
 /*return(
  <>
  <div><MyComponent/></div>
  </>
 )*/
}
function MyComponent()
{
  useEffect(()=>{
     console.log("this is mounted")
     return()=>{
      console.log("this is unmounted")
     }
  },[])
}

export default App
