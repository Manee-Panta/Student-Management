import React,{useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import NavMain from './NavMain'
const Delete = () => {
  const params = useParams('')
const {id}=params
const navigate =useNavigate('')

useEffect(()=>{
  fetch('http://localhost:3000/students/'+params.id,{
    method:'DELETE',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },

  }).then((resp)=>{
    resp.json().then((result)=>{
      alert('Item is deleted')
      navigate('/list')
    })
  })
})
  return (
    <>    
    <NavMain/>
 
    <div className='deleteMain'>
      <h3>Delete Student</h3>
<h3>The deleted id is {id}</h3>
    </div>
    </>
  )
}

export default Delete