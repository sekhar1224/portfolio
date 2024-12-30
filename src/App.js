import './App.css';
import Navbar from './Componants/Navbar/Navbar';
import Home from './Componants/Hero/Hero';
import About from './Componants/About/About';
import Technologies from './Componants/Technologies/Technologies';
import Skills from './Componants/Skills/Skills';
import Projects from './Componants/Projects/Projects';
import Contact from './Componants/Contact/Contact';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import Login from './Componants/Login/Login';
// import Registration from './Componants/Registration/Registration';
// import Empty from './Componants/Empty/Empty';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Technologies/>
      {/* <Skills/> */}
      <Projects/>
      <Contact/>
    </div>
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/'element={<Empty/>}>
    //   <Route path='/login' element={<Login/>}/>
    //   <Route path='/registration' element={<Registration/>}/>
    //   <Route path='/technologies' element={<Technologies/>}/>
    //   <Route path='/about' element={<About/>}/>
      
    //   </Route>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
