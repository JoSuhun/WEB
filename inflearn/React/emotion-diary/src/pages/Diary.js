import { useParams } from "react-router-dom"

const Diary = () => {

    const {id} = useParams()
    console.log(id)

    return(
        <div>
            <h1>일기장!</h1>
            <p>이곳은 일기 상세 페이지라네</p>
        </div>
    )
}
export default Diary