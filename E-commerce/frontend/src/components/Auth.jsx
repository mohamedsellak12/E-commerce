import React from 'react'
import { useSelector } from 'react-redux'
import User from './User';
import Guest from './Guest';

export default function Auth() {
    const getuser=useSelector(state=>state.User.user);
    const gettoken=localStorage.getItem('auth_token');
    if(gettoken){
        return <User/>
    }
   
  return (
    <div>
        
    </div>
  )
}
