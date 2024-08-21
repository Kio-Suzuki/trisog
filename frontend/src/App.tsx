import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tour from './pages/Tour/Tour';

import './App.css'
import Demo from './pages/TourDemo/Demo';

function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/tour' element={ <Tour /> } />
      <Route path='/demo' element={ <Demo /> } />
    </Routes>
  )
}

export default App
