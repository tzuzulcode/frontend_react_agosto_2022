import React,{useState, useReducer} from 'react'
import authReducer, { initialState } from '../reducers/authReducer'

export const authContext = React.createContext()

export default function AuthContext({children}) {

    // const [user,setUser] = useState({
    //     logged:false,
    //     data:null
    // })
    const [state, dispatch] = useReducer(authReducer,initialState)

    return (
        <authContext.Provider
            value={{
                user:state,
                setUser:dispatch
            }}
        >
            {children}
        </authContext.Provider>
    )
}
