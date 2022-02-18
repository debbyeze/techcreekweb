import './App.css';
import './style.scss';
import Leftcontainer from './Component/Leftcontainer';
import Rightcontainer from './Component/Rightcontainer';
import Navbar from './Component/Navbar';
import {useState} from 'react';

function App() {
  const [nav, setNavbar] = useState (false);
    const handlenavbar = () => setNavbar (!nav);
  return (
    <div className="App">
      <Leftcontainer handlenavbar={handlenavbar}/>
      <Rightcontainer/>
      <Navbar handlenavbar={handlenavbar} nav={nav}/>
    
      
      
    </div>
  );
}

export default App;
