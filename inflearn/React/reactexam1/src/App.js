// import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Couter';
import Container from './Container';

function App() {

  const counterProps = {
    a : 1,
    initialValue : 5
  }

  return (
    <Container>

    <div>
      <MyHeader />
      <Counter {...counterProps} />
      <MyFooter />
    </div>
    
    </Container>
  );
}

export default App;
