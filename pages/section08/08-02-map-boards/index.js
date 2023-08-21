import { gql, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql`
    query {
        fetchBoards {
            number
            writer
            title
            contents
        }
    }
`



export default function StaticRoutingMovedPage() {
    const { data } = useQuery( FETCH_BOARDS )

    console.log(data?.fetchBoards)

    return (
        <div>
            {data?.fetchBoards.map(el => (
                <div>
                    <span>
                        <input type="checkbox" />
                    </span>
                    <span style={{margin : "10px"}}>{el.number}</span>
                    <span style={{margin : "10px"}}>{el.title}</span>
                    <span style={{margin : "10px"}}>{el.writer}</span>
                </div>
                ))}
            {/* <div>1번 게시글 이동이 완료되었습니다.</div>
            <div>작성자 : {data?.fetchBoard.writer} </div>
            <div>제목 : {data?.fetchBoard.title} </div>
            <div>내용 : {data ? data.fetchBoard.contents : "로딩중 입니다."} </div> */}
        </div>
    )
}