import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import Main from './component/Main'
import Card from './component/Card'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'




function App() {
  return (
    <div className="App">
    <Nav/>
    <HeroSection/>
     <Main/>
     <Card/>
     <Footer/>
    

    </div>
  );
}

export default App;
