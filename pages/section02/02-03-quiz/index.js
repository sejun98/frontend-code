import { useState } from "react"

export default function Project() {
    const[change, setChange] = useState("안녕하세요.")

    function onClickChange (event) {
        setChange("바뀌었습니다.")
        // let 방식
        //  document.getElementById("Change").innerText = "바뀌었습니다."
    }

    return (
        // let을 활용 -----
        // <div>
        //     <button id="Change" onClick={onClickChange}>안녕하세요.</button>
        // </div>

        // state를 활용 ----
        <div>
            <button onClick={onClickChange}>{change}</button>
        </div>
    )
}