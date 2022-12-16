import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/Aboutus/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Alert from './components/Alert';
import React,{useState} from 'react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  return (
    <>
    <Router>
      <ScrollToTop/>
    <Header/>
    <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/contact" element={<Contact showalert={showAlert}/>}/>
      </Routes>
    <Footer/>
    </Router>     
    </>
  );
}

export default App;
