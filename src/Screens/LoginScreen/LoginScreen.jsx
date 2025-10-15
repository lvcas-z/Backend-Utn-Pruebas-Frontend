import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { login } from '../../Services/auth.service.js'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import { AuthContext } from '../../Context/AuthContext'

const LoginScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { onLogin } = useContext(AuthContext)

    useEffect(
        () => {
            const query = new URLSearchParams(location.search)
            const from = query.get('from')
            if (from === 'verified_email') {
                alert('Has validado tu mail exitosamente')
            }
        },
        [] //Solo queremos que se ejecute cuando se monte el componente
    )


    const loginFormFields = {
        EMAIL: 'email',
        PASSWORD: 'password'
    }

    const initialFormState = {
        [loginFormFields.EMAIL]: '',
        [loginFormFields.PASSWORD]: ''
    }

    const { response, error, loading, sendRequest, resetResponse } = useFetch()

    function handleLogin(formStateSent) {
        resetResponse()
        sendRequest(
            () => {
                return login(
                    formStateSent[loginFormFields.EMAIL],
                    formStateSent[loginFormFields.PASSWORD]
                )
            }
        )
    }

    const {
        formState,
        onInputChange,
        handleSubmit,
        resetForm
    } = useForm(initialFormState, handleLogin)

    useEffect(
        () => {
            if (response && response.ok) {
                //Queremos que persista en memoria el auth token
                //Dejamos que el context se encargue de que sucedera
                onLogin(response.body.auth_token)

            }
        },
        [response]
    )
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="email">Email: </label>
                    <input type="text" placeholder="example@gmail.com" value={formState[loginFormFields.EMAIL]} name={loginFormFields.EMAIL} onChange={onInputChange} id={'email'} />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" placeholder="example1283712" value={formState[loginFormFields.PASSWORD]} name={loginFormFields.PASSWORD} onChange={onInputChange} id={'password'} />
                </div>

                {error && <span style={{ color: 'red' }}> {error} </span>}
                {response && <span style={{ color: 'green' }}> Successful Login </span>}

                {
                    loading
                        ? <button disabled>Loggin In</button>
                        : <button>Login</button>
                }
            </form>
        </div>
    )
}

export default LoginScreen