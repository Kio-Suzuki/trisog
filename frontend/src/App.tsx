import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tour from './pages/Tour/Tour';
import Login from './pages/Login/Login';
import Demo from './pages/TourDemo/Demo';
import SignUp from './pages/SignUp/SignUp';
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/tour' element={ <Tour /> } />
      <Route path='/demo' element={ <Demo /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/signup' element={ <SignUp /> } />
    </Routes>
  )
}

export default App
