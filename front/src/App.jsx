import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Discover from './pages/Discover/Discover'
import Add from './pages/Add/Add'
import Detail from './pages/Detail/Detail'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/discover' element={<Discover/>}/>
      <Route path='/:detailId' element={<Detail/>}/>
      <Route path='/add' element={<Add/>}/>
    </Routes>
    </>
  )
}

export default App
