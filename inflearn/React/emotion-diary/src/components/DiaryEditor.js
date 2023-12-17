import { useNavigate } from "react-router-dom"
import { useState, useRef, useContext, useEffect } from "react"
import { DiaryDispatchContext } from "../App"
import { emotionList } from "../util/emotion"

import MyHeader from "./MyHeader"
import MyButton from "./MyButton"
import EmotionItem from "./EmotionItem"


const env = process.env
env.PUBLIC_URL = env.PUBLIC_URL || ''



const getStringDate = (date) => {
    return date.toISOString().slice(0, 10)
}

const DiaryEditor = ({isEdit, originData})=>{
    const navigate = useNavigate()

    const [date, setDate] = useState(getStringDate(new Date()))
    const [emotion, setEmotion] = useState(3)
    const [content, setContent] = useState('')
    const contentRef = useRef()

    const handleClickEmote = (emotion) =>{
        setEmotion(emotion)
    }

    const { onCreate, onEdit } = useContext(DiaryDispatchContext)


    const handleSubmit = () => {
        if (content.length < 1) {
            contentRef.current.focus()
            return
        }
        if (window.confirm(isEdit? '일기를 수정하시겠어요?' : '새로운 일기를 작성할까요?')) {
            if(!isEdit) {
                onCreate(date, content, emotion)
            } else {
                onEdit(originData.id, originData.date, content, emotion)
            }
        }
        navigate('/', {replace:true})
    }

    useEffect(()=>{
        if(isEdit) {
            setDate(getStringDate(new Date(parseInt(originData.date))))
            setEmotion(originData.emotion)
            setContent(originData.content)
        }
        }, [isEdit, originData])

    return (
        <div className="DiaryEditor">
            <MyHeader
                headText={isEdit? '📝 일기 수정하기' : '📝 새 일기 쓰기'}
                leftChild={<MyButton text={'< 뒤로가기'} onClick={()=>navigate(-1)}/>}
            />
        <div>
            <section>
                <h4>오늘은 언제인가요?</h4>
                <div className="input_box">
                    <input
                        className="input_date"
                        type='date'
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                    />
                </div>
            </section>
            <section>
                <h4>오늘의 감정</h4>
                <div className="input_box emotion_list_wrapper">
                    {emotionList.map((it)=>
                    <EmotionItem
                    key={it.emotion_id} {...it}
                    onClick={handleClickEmote}
                    isSelected={it.emotion_id === emotion}/>
                    )}
                </div>
            </section>
            <section>
                <h4>오늘의 일기</h4>
                <div className="input_box_text_wrapper">
                    <textarea
                    placeholder="오늘은 어떤 하루였나요?"
                    ref={contentRef}
                    value={content}
                    onChange = {(e)=>setContent(e.target.value)}
                    >
                    </textarea>
                </div>
            </section>
            <section>
                <div className="control_box">
                    <MyButton text={'취소하기'} onClick={()=>navigate(-1)}/>
                    <MyButton text={'작성완료'} type={'positive'} onClick={handleSubmit}/>

                </div>
            </section>
        </div>
        </div>
    )

}

export default DiaryEditor