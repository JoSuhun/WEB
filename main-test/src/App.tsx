import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import GlobalStyle from './pages/styles/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
