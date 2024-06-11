import Home from './components/membersWall'
import Login from './components/Login'
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MembersWall from './components/membersWall'
function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/membersWall' element={<MembersWall/>}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
