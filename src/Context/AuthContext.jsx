import { createContext,  useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router";

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    //Configuramos para hacer mas adelante redirecciones
    const navigate = useNavigate()

    //ESTADO CON: Datos de sesion
    const [user, setUser] = useState(null)

    //ESTADO: Marca si esta o no logueado el usuario
    const [ isLogged, setIsLogged ] = useState( Boolean(localStorage.getItem('authToken')) )


    //Una vez se monte el componente decodificar el token y guardar los datos de sesion
    useEffect(
        () => {
            if(!localStorage.getItem('authToken')){
                setIsLogged(false)
                setUser(null)
                return 
            }
            const user = decodeToken(localStorage.getItem('authToken'))
            if(user){
                setUser(user)
                setIsLogged(true)
            }
            else{
                setIsLogged(false)
                setUser(null)
            }
        },
        []
    )

    function onLogout(){
        localStorage.removeItem('authToken')
        setIsLogged(false)
        setUser(null)
        //Si quieren pueden redireccionar a login
        navigate('/home')
    }

    function onLogin (authToken){
        console.log("Soy el auth",authToken);
        
        localStorage.setItem('authToken', authToken)
        setIsLogged(true)
        const user_session = decodeToken(authToken)
        setUser(user_session)
        navigate('/home')
    }



    return <AuthContext.Provider
        value={{
            isLogged,
            user,
            onLogin, 
            onLogout
        }}
    >
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider