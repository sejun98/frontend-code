import {RedInput,BlueButton} from './BoardWrite.styles'

export default function BoardWriterUI(props) {



    return (
        <div>
            작성자 : <RedInput type="text" onChange={props.bbb}/>
            제목 : <input type="text" onChange={props.ccc}/>
            내용 : <input type="text" onChange={props.ddd}/>
            <BlueButton onClick={props.aaa}>GRAPHQL-API 요청하기</BlueButton>
        </div>
    )
}


const apple = 3;