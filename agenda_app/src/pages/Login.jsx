import { useContext, useRef } from "react"
import SubmitButton from "../components/buttons/SubmitButton"
import Container from "../components/containers/Container"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import Title from "../components/headers/Title"
import { authContext } from "../context/AuthContext"


// Desestructuración
// Destructuring
export default function Login() {

    const email = useRef()
    const password = useRef()
    const {setUser} = useContext(authContext)

    const login = (event)=>{
        event.preventDefault()

        // Backend: hariamos una request
        setUser({
            logged:true,
            data:{
                email: email.current.value,
                password: password.current.value
            }
        })
    }
    
    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={login}>
                <Input ref={email} placeholder="Email" type="email" />
                <Input ref={password} placeholder="Password" type="password" />
                <SubmitButton>Login</SubmitButton>
            </Form>
        </Container>
    )
}
