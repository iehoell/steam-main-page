import './App.css';
import backgorundVideo from './assets/backgroundVideo.webm';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Liked from "./components/Liked/Liked";
import Categories from "./components/Categories/Categories";
import Slider1 from "./components/Slider1/Slider1";
import BigSale from "./components/BigSale/BigSale";

function App() {
  return (
    <div className="App">
        <video id='backgroundVideo' width='100%' loop='loop' autoPlay='autoplay' muted="muted" preload='auto'>
            <source src={backgorundVideo} type='video/webm'></source>
        </video>
        <Header/>
        <div className='content'>
            <Slider1/>
            <BigSale/>
            <Cards/>
            <Liked/>
            <Categories/>
        </div>
        <Footer/>
    </div>
  );
}   

export default App;
