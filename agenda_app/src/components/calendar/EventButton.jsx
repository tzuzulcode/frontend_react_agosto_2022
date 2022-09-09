import styled from "styled-components";

const Button = styled.div`
    background-color: #D0E0F1;
    height: 100%;
    border: 1px solid #91B6DE;
`

export default function EventButton({hour}) {
    const createEvent = ()=>{
        alert("Click: "+hour)
    }
    return (
        <Button onClick={createEvent}></Button>
    )
}