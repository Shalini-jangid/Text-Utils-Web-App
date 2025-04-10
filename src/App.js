import Accordian from './Accordian';
import './App.css';
import Box from './Box';
import Button from './Button';
import Clipboard from './Clipboard';
import DigiClock from './DigiClock';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import {Route,Routes,HashRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/clipboard' element={<Clipboard/>}/>
<Route path='/accordian' element={<Accordian/>}/>
<Route path='/box' element={<Box/>}/>
<Route path='/digiclock' element={<DigiClock/>}/>
<Route path='/button' element={<Button/>}/>
<Route path='/textutil' element={<Home/>}/>
      </Routes>
      </Router>
      
      <Footer/>
    </div>
  );
}

export default App;
