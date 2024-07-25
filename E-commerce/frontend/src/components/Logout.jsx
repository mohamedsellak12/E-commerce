import React from 'react'
import { Navigate} from 'react-router-dom';
export default function Logout() {
    localStorage.removeItem('auth_token');
    return <Navigate to='/login'/>
  
}
