import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Tours from './pages/Tours/Tours';
import Login from './pages/Login/Login';
import TourInfo from './pages/TourInfo/TourInfo';
import SignUp from './pages/SignUp/SignUp';
import Destination from './pages/Destination/Destination';
import DestinationInfo from './pages/DestinationInfo/DestinationInfo';
import { Protected } from './pages/ProtectedRoute/ProtectedRoute';


import './App.css'
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route 
        path='/tours' 
        element={ <Protected><Tours /></Protected>}
      />
      <Route 
        path='/tours/:id' 
        element={ <Protected><TourInfo /></Protected>}
      />
      <Route path='/login' element={ <Login /> } />
      <Route path='/signup' element={ <SignUp /> } />
      <Route path='/destination' element={ <Destination /> } />
      <Route path='/destination/:id' element={ <DestinationInfo /> } />
    </Routes>
    <ToastContainer />
    </>
  )
}

export default App