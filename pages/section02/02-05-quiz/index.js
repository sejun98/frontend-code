import { useState } from "react"

export default function Project() {
    const[number, setNumber] = useState(0)
    function CreateNumber() {
        setNumber(Math.floor(Math.random() * 1000000))
    }

    return (
        <div>
            <div>{number}</div>
            <button onClick={CreateNumber}>인증번호생성</button>
        </div>

    )
}