import { useState } from "react"
import { useContext, useRef } from "react"
import SubmitButton from "../components/buttons/SubmitButton"
import Container from "../components/containers/Container"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import Title from "../components/headers/Title"
import { authContext } from "../context/AuthContext"


// Desestructuración
// Destructuring
export default function LoginState() {

    // const [email,setEmail] = useState("")
    // const [password,setPassword] = useState("")

    const [data,setData] = useState({
        email:"",
        password:"",
        rememberMe:false
    })

    const {setUser} = useContext(authContext)

    const login = (event)=>{
        event.preventDefault()

        // Backend: hariamos una request
        setUser({
            logged:true,
            data:{
                email: data.email,
                password: data.password
            }
        })
    }

    // const handleChangeEmail = (event)=>{
    //     setEmail(event.target.value)
    // }
    // const handleChangePassword = (event)=>{
    //     setPassword(event.target.value)
    // }

    const handleInputChange = (event)=>{
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleInputCheckedChange = (event)=>{
        setData({
            ...data,
            [event.target.name]: event.target.checked
        })
    }
    
    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={login}>
                <Input onInput={handleInputChange} value={data.email} placeholder="Email" type="email" name="email" />
                <Input onChange={handleInputChange} value={data.password} placeholder="Password" type="password" name="password" />
                <Input onChange={handleInputCheckedChange} checked={data.rememberMe} type="checkbox" name="rememberMe" />

                <SubmitButton>Login</SubmitButton>
            </Form>
        </Container>
    )
}
