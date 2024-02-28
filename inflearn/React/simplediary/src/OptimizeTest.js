import React, { useState, useEffect } from 'react'

const CounterA = React.memo(({count}) => {
    useEffect(()=>{
        console.log(`Couuter A updated - count:${count}`)
    })
    return <div>{count}</div>
})
const CounterB = ({obj}) => {
    useEffect(()=>{
        console.log(`Couuter B updated - count:${obj.count}`)
    })
    return <div>{obj.count}</div>
}

const areEqual = (prevProps, nextProps) => {
    if (prevProps.obj.count === nextProps.obj.count){
        return true // 이전 프롭스와 현재 프롭스가 같다? => 리랜더링 없음
    }
    return false
}
const MemoizedCounterB = React.memo(CounterB,areEqual)

const OptimizeTest = () => {
    const [count, setCount] = useState(1)
    const [obj, setObj] = useState({
        count:1
    })

    return (
    <div style={{padding:50, backgroundColor:'tomato'}}>
        <div>
            <h2>Counter A</h2>
            <CounterA count={count}/>
            <button onClick={()=>setCount(count)}>A button</button>
        </div>
        <div>
            <h2>Counter B</h2>
            <MemoizedCounterB obj={obj}/>
            <button onClick={()=>setObj({count:obj.count})}>B button</button>
        </div>
    </div>
)}

export default OptimizeTest