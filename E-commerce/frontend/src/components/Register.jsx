import React, { useEffect } from 'react'
import { useState } from 'react'
import AxiosClient from '../Axios/AcxiocClient'

import { useNavigate } from 'react-router-dom'

function Register() {
    useEffect(()=>{
        AxiosClient.get('/data').then((data)=>{
            console.log(data.data)
        })
        .catch(error=>console.log('the error is:'+error))
    },[])
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [password_confirmation, setConfirmPassword] = useState('');
//     const navigate=useNavigate()
//     const handlregister=async (event)=>{
//         event.preventDefault()
//         try{
//             await axios.post('/register' ,{name,email,password,password_confirmation})
//            setName('')
//            setEmail('')
//            setPassword('')
//            setConfirmPassword('')
           

//             navigate("/")
//         }catch(e){
//             console.log(e)
//         }

//     }
//   return (
// <div>
//             <h1>Register</h1>
//             <form onSubmit={handleRegister}>
//                 Name: <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} required /><br/>
//                 Email: <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required /><br/>
//                 Password: <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required /><br/>
//                 Confirm Password: <input type="password" name="confirmPassword" 
//                 value={password_confirmation} onChange={(e)=>setConfirmPassword(e.target.value)}  required /><br/>
//                 <input type="submit" value="Register" />
//             </form>
//         </div>
//           )
}

export default Register