import React from 'react'
import { useLocation } from 'react-router'

const LoginScreen = () => {

    const query = new URLSearchParams(useLocation().search)
    console.log(query);
    const from = query.get('from')

    if(from === 'verified_email'){
        alert("Has validado tu mail exitosamente")
    }

    return (
        <div>LoginScreen</div>
    )
}

export default LoginScreen