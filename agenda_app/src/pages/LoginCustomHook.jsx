import { useContext } from "react"
import SubmitButton from "../components/buttons/SubmitButton"
import Container from "../components/containers/Container"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import Title from "../components/headers/Title"
import { authContext } from "../context/AuthContext"
import useInput from "../hooks/useInput"


// Desestructuración
// Destructuring
export default function LoginCustomHook() {

    const {setUser} = useContext(authContext)

    const email = useInput("")
    const password = useInput("")
    const rememberMe = useInput(false,true)

    const login = (event)=>{
        event.preventDefault()

        // Backend: hariamos una request
        setUser({
            logged:true,
            data:{
                email: email.value,
                password: password.value
            }
        })
    }

    return (
        <Container>
            <Title>Login</Title>
            <Form onSubmit={login}>
                <Input 
                    {...email}
                    placeholder="Email" 
                    type="email" 
                    name="email"
                />
                <Input 
                    {...password}
                    placeholder="Password" 
                    type="password" 
                    name="password" 
                />
                <Input 
                    onChange={rememberMe.onChange} 
                    checked={rememberMe.value} 
                    type="checkbox" 
                    name="rememberMe" 
                />

                <SubmitButton>Login</SubmitButton>
            </Form>
        </Container>
    )
}
