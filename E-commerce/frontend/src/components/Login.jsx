import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { storeUser } from '../redux/userSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AxiosClient from '../Axios/AcxiocClient';
function Login() {
    const dispatch=useDispatch();
    const user=useSelector(state=>state.User.user);
    const[email,setEmail]=useState("")
    const[password,setpasword]=useState("")
    const navigate=useNavigate()
    const crfApi=axios.create({baseURL:"http://localhost:8000",withCredentials:true})
    const getCrfToken=async ()=>{
        try{
           await crfApi.get('/sanctum/csrf-cookie')
        }
        catch{
            console.log('the csrf token is not retrived');
        }
    }
    const handlLogin=async (event)=>{
        event.preventDefault();
        await getCrfToken()
        try{
            await AxiosClient.post('/login' ,{email,password},{withCredentials:true}).then(res=>{
                console.log(res.data);
                dispatch(storeUser({user:res.data.user,token:res.data.token}));
                localStorage.setItem('auth_token',res.data.token);

            
            })
            setEmail("")
            setpasword("")
            navigate("/")
        }catch(e){
            console.log('the error is',e)
        }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handlLogin}>
            Email:<input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="" /><br/>

            password<input type="password" name="password" value={password} onChange={(e)=>{setpasword(e.target.value)}} id="" /> <br />
            <input type="submit" value="envoyer" />
        </form>
    </div>
  );
}

export default Login