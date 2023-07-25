import axios from "axios"

export default function RestGetPage() {

    function onClickAsycn() {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) // Promise
    }

    async function onClickSycn() {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result) // 제대로된 결과
    }

    return (
        <div>
            <button onClick={onClickAsycn}>REST-API(비동기) 요청하기</button>
            <button onClick={onClickSycn}>REST-API(동기) 요청하기</button>
        </div>
    )
}