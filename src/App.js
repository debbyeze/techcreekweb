import React from 'react';
import './App.css';
import './style.scss';
import './Component/Main';
import '../src/Component/navbar.scss';
import './Component/pages/learn.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Component/Main';
import Learn from './Component/pages/Learn';



function App() {
  
  return (
    <>
  
     <Router>
       <Routes>
         <Route path='/' element = {<Main/>}/>
         <Route path='/Learn' element = {<Learn/>}/>
       </Routes>
     </Router>

    </>
  );
}

export default App;
