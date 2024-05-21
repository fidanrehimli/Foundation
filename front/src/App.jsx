import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Discover from './pages/Discover/Discover'
import Donate from './pages/Donate/Donate'
import Add from './pages/Add/Add'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='discover' element={<Discover/>}/>
      <Route path='donate' element={<Donate/>}/>
      <Route path='add' element={<Add/>}/>
    </Routes>
    </>
  )
}

export default App
