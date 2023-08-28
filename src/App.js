import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Header from "./Component/Header";
import Footer from './Component/Footer';
import './Component/CSS/H1.css';
import Contact from './Component/Contact';
import Market from './Component/Market';
import About from './Component/About';
import Wallet from './Component/Wallet';
import Login from './Component/Login';

function App() {
  return (
    <BrowserRouter>
      <Header/> 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path="/Market" element={<Market/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path ="/Wallet" element= {<Wallet/>}></Route>
          <Route path ="/Login" element= {<Login/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
       
  );
}
export default App;
