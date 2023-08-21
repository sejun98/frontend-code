import { useMutation, gql } from "@apollo/client"

const 나의그래프큐엘셋팅 = gql`
    mutation {
        createBoard(writer : "유리", title : "아아", contents : "안녕") {
            _id
            number
            message
        }
    }
` 


export default function GraphqlMutationPage() {
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () => {
        const result = await 나의함수()
        console.log(result)
    }

    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
}