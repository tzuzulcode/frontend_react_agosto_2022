import { useRef } from "react"
import SubmitButton from "../components/buttons/SubmitButton"
import Container from "../components/containers/Container"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import Title from "../components/headers/Title"


// Desestructuración
// Destructuring
export default function Login({setUser}) {

    const email = useRef()
    const password = useRef()

    const login = (event)=>{
        event.preventDefault()
        console.log(email.current.value)
        console.log(password.current.value)

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
