import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
import {AiFillLike,AiFillDislike  } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";


function App() {

const [post, setpost] = useState([]) 
const [Loadmore, setLoadmore] = useState(5)
const [Loading, setLoading] = useState()


const getProducts =async () => {
  setLoading(true)
  const response = await axios.get('https://dummyjson.com/posts') 
  console.log(response.data.posts);
  setpost(response.data.posts)
  setLoading(false)
}
 
useEffect(() => {
 
  getProducts()  



}, [])

  return (
<>
    <div>
      <br />

{  Loading ? (
  <h1>Loading...</h1>):
post.slice(0,Loadmore).map((item)=>{
  return(
    <div className="rounded-border ">
<div key={item.id}>
  <h2>{item.userId}</h2>

  <h1>Title:{item.title}</h1>
  
  <br />

  <h1>Content</h1><p>{item. body}</p>
  <div style={{alignItems:'center',display:'flex',marginLeft:'480px'}}>
<button className='btn'><FaRegEye style={{ fontSize: "14px", marginRight: "5px", color: "wheat" }}/>{item.views  }</button>

<br />  
<br />  

  <button  className='btn'><AiFillLike style={{ fontSize: "14px", marginRight: "5px", color: "#1877F2" }}/>{item.reactions.likes}</button>
<br />
<br />

<button  className='btn'><AiFillDislike style={{ fontSize: "14px", marginRight: "5px", color: "grey" }}/>{item.reactions.dislikes}</button>
</div>


</div>
</div>
)

})}







    </div>
<button onClick={()=>{setLoadmore(Loadmore+5)}}>Load more</button>

    </>
  )
  
}

export default App