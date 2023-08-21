import axios from "axios"
import EmotionPage from '../../section01/01-02-emotion'

export default function RestGetPage() {

    function onClickAsycn() {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) // Promise
    }

    // async function onClickSycn() {
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result) // 제대로된 결과
    //     console.log(result.data.title)
    // }    => 함수 중복 선언 문제

    const onClickSycn = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result) // 제대로된 결과
        console.log(result.data.title)
    }

    return (
        <div>
            <button onClick={onClickAsycn}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSycn}>REST-API(동기) 요청하기</button>
            {/* <EmotionPage/> */}
        </div>
    )
}