import React, { useState, useRef, useEffect } from 'react'

const DiaryEditor = ({onCreate}) => {
    useEffect(()=>{
        console.log('DiaryEditor 랜더랜더랜더')
    })
    const authorInput = useRef()
    const contentInput = useRef()

    const [state, setState] = useState({
        author:'',
        content:'',
        emotion: 1,
    })

    const handleChangeState = (event) => {
        setState({
            ...state,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit = () => {
        if (state.author.length < 1) {
            // alert('작성자는 최소 1글자 이상')
            authorInput.current.focus()
            return
        }
        if (state.content.length < 5) {
            // alert('일기 본몬은 최소 5글자 이상')
            contentInput.current.focus()
            return
        }
        onCreate(state.author, state.content, state.emotion)
        alert('저장됨!')
        setState({
            author:'',
            content:'',
            emotion: 1,
        })
    }

    return (
    <div className="DiaryEditor">
        <h2>안뇽하세요, 나의 오늘 일기!</h2>
        <div>
            <input
              ref={authorInput}
              name='author'
              value={state.author}
              onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea
              ref={contentInput}
              name='content'
              value={state.content}
              onChange={handleChangeState}/>
        </div>
        <div>
            <label>오늘의 감정 점수 </label>
            <select
              name='emotion'
              value={state.emotion}
              onChange={handleChangeState}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기!</button>
        </div>
    </div>
    )
}

export default React.memo(DiaryEditor)