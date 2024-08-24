import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tour from './pages/Tour/Tour';
import Login from './pages/Login/Login';
import Demo from './pages/TourDemo/Demo';
import SignUp from './pages/SignUp/SignUp';
import Destination from './pages/Destination/Destination';
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/tour' element={ <Tour /> } />
      <Route path='/tours/:id' element={ <Demo /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/signup' element={ <SignUp /> } />
      <Route path='/destination' element={ <Destination /> } />
    </Routes>
  )
}

export default App
