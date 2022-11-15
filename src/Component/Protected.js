import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Protected = (props) => {
    let Navigate=useNavigate()
    let Cmp=props.Cmp

    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
            Navigate('/login')
        }
    },[])
  return (
    <div>
<Cmp/>
    </div>
  )
}

export default Protected