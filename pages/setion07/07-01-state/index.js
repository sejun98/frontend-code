import BoardWrite from "../../../src/units/board/07-write/BoardWrite.container"

export default function GraphqlMutationPage(props) {
    


    // 한 줄일 때는 괄호() 필요없음
    return (
        <div>
            <div>###### 여기는 페이지 입니다 ######</div>
            <BoardWrite qqq="철수"/>
            <div>###### 여기는 페이지 입니다 ######</div>
        </div>

    )
}