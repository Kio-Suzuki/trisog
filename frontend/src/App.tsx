import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tour from './pages/Tour/Tour';

import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/tour' element={ <Tour /> } />
    </Routes>
  )
}

export default App
