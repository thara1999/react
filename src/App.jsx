
import {  BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import './App.css'
import Laun from './components/Laun'
import Menu from './components/Menu'
import Home from './components/Home'
import Movies from './components/Movies'
import TVShows from './components/TVShows'
import Sports from './components/Sports'
import Live from './components/Live'
import Settings from './components/Settings'
function App() {
  

  return (
    <Laun>
      <Router>
      <Menu />
     <Routes>
     <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
          <Route path="/settings" element={<Settings />} />
     </Routes>
      </Router>
    </Laun>
  )
}

export default App
