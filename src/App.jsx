import Home from './components/membersWall'
import Login from './components/Login'
import NavBar from './components/NavBar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import MembersWall from './components/membersWall'
import FooterComp from './components/Footer'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
function App() {
  return (
    <>
        <Router>
          <NavBar/>
          <Routes>
          <Route path='/' element={<Landing/>}/>
            <Route path='/Landing' element={<Landing/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/membersWall' element={<MembersWall/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
          </Routes>
          <FooterComp/>
        </Router>
    </>
  )
}

export default App
