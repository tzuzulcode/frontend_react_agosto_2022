import { useState } from "react"

const useInput = (initialValue, isCheckBox=false)=>{
    const [value,setValue] = useState(initialValue)

    const onChange = (event)=>{
        if(isCheckBox){
            setValue(event.target.checked)
        }else{
            setValue(event.target.value)
        }
    }

    return {
        value,
        onChange
    }
}

export default useInput