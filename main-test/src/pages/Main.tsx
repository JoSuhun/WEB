import Carousel from '../components/Main/Carousel';
import KeywordsSection from '../components/Main/KeywordsSection';
import MainSection from '../components/Main/MainSection';
import Slide from '../components/Main/Slide';
import Navbar from '../components/Navbar';
function Main() {
  return (
    <>
    <Navbar />
    <Slide />
    <Carousel />
    {/* <MainSection /> */}
    <KeywordsSection />
    <div>
      안녕하세용
    </div>
    </>
  )
}

export default Main
