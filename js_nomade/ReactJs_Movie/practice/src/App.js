import { useState, useEffect } from 'react'


function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect (()=>{
    fetch('https://api.coinpaprika.com/v1/tickers?limit=10')
      .then((response)=>response.json())
      .then((json)=>{
        setCoins(json)
        setLoading(false)
      })
  }, [])


  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === '') {
      return
    }
    setToDo('')
    setToDos((currentArray) => {
      return [toDo, ...currentArray]
    })
  }
  return (
    <div>
      <h1>오늘의 할 일 ... {toDos.length}개</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder='wirte your todos..'
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <h1>The coins ({coins.length})</h1>
      {loading
       ? <strong>Loading ...</strong>
       : <select>
          {coins.map((coin) => <option key={coin.id}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price}</option>)}
        </select>}
        
    </div>
  )
}

export default App;
