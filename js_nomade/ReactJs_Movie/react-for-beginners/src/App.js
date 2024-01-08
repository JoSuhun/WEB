import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick = () => {
    setValue((prev) => prev + 1)
  }
  const onChange = (event) => setKeyword(event.target.value)

  // 1. 매번 render
  console.log('render all the time')
  // 2. 한번 render
  useEffect(() => {
    console.log('only once')
  }, [])
  // 3. keyword가 (해당 조건에 통과하고) 변경될 때만 render
  useEffect(()=>{
    if (keyword != '' & keyword.length > 5) {
    console.log(keyword)
    }
  }, [keyword])
  useEffect(() => {
    console.log('counter changed!!!')
  }, [counter])
  useEffect(()=>{
    console.log('counter&keyword changed!!!!')
  }, [counter, keyword])

  return (
    <div>
      <input value={keyword} onChange={onChange} type='text' placeholder='search ...' />

      <h1 className={styles.title}>안녕하십니까!</h1>

      <p>{counter}</p>
      <button onClick={onClick}>Click Me!!!</button>

      <Button text={'tomato'} />
    </div>
  );
}

export default App;
