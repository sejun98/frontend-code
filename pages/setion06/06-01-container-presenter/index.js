import BoardWrite from "@/src/units/board/write/BoardWrite.container"

export default function GraphqlMutationPage() {
    


    // 한 줄일 때는 괄호() 필요없음
    return (
        <div>
            <div>###### 여기는 페이지 입니다 ######</div>
            <BoardWrite/>
            <div>###### 여기는 페이지 입니다 ######</div>
        </div>

    )
}