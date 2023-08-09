import { useMutation} from "@apollo/client"
import { useState } from "react"
import {나의그래프큐엘셋팅} from './BoardWrite.queries' // export는 골라서 가져오기
import BoardWriterUI from "./BoardWrite.presenter"; // export-default로 한 개만 가져오기
// import BoardWriterUI from "./BoardWrite.presenter"; // export-default로 한 개만 가져오기
// import BoardWriterUI, {apple} from "./BoardWrite.presenter"; // export-default와 export 함께 가져오기
// import * as S from './BoardWrite.styles' // 모든 export를 가져와줘
// S.BlueButton
// S.RedInput

export default function BoardWrite() {
    const[isActive, setIsActive] = useState(false)

    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    // const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables : {                // variables 이게 $ 역활을 함
                writer : writer,
                title : title,
                contents : contents
            }
        })
        console.log(result)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)

    }

    const onChangeContents = (event) => {
        setContents(event.target.value)

        if(writer && title && contents) {
            setIsActive(true)
        }

    }
    console.log()

    return (
        <BoardWriterUI 
            onClickSubmit={onClickSubmit} 
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            coChangeContents={onChangeContents}
            isActive={isActive}/>
    )
}