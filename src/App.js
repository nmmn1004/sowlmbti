import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Select from './pages/Selection';
import Result from './pages/Result'
import LogoImage from './img/sowlLogo.svg';

function App() {
  return (
    <div className='mainContainer'>
      <header className='mainHeader'>
        S.owl MBTI
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
