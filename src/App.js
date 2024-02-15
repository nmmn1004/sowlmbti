import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Select from './pages/Selection';
import Result from './pages/Result'
import LogoImage from './img/sowlLogo.svg';
import LogoTitle from './img/sowlMbti.svg';

function App() {
  return (
    <div className='mainContainer'>
      <header>
        <img src={LogoTitle} alt='logoTitle' className='mainHeader' oncontextmenu="return false"></img>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/selection' element={<Select />} />
        <Route path='/result/:mbti' element={<Result />} />
      </Routes>
      <footer className='mainFooter'>
        <img src={LogoImage} alt="logoImage" className='mainLogo'/>
        제작: 소울 회장 최준혁
      </footer>
    </div>
  );
}

export default App;
