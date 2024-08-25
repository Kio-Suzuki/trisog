import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tours from './pages/Tours/Tours';
import Login from './pages/Login/Login';
import Demo from './pages/TourDemo/Demo';
import SignUp from './pages/SignUp/SignUp';
import Destination from './pages/Destination/Destination';
import DestinationInfo from './pages/DestinationInfo/DestinationInfo';
import './App.css'

function App() {
  
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/tours' element={ <Tours /> } />
      <Route path='/tours/:id' element={ <Demo /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/signup' element={ <SignUp /> } />
      <Route path='/destination' element={ <Destination /> } />
      <Route path='/destination/:id' element={ <DestinationInfo /> } />
    </Routes>
  )
}

export default App
