import { useState } from "react"

export default function Project() {
    const[number,setNumber] = useState(0)

    function CountUp(event) {
        setNumber(number+1)

    }


    return (
        <div>
            <div>{number}</div>
            <button onClick={CountUp}>카운트올리기</button>
        </div>
    )
}