import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Footer from './components/Footer'
import Scifi from "./pages/Scifi"
import Action from './pages/Action'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Login from './pages/Login'


function App (){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Scifi' element={<Scifi/>} />
        <Route path='/Action' element={<Action/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Signup' element={<Signup/>} /> 
        <Route path='/Login' element={<Login/>} /> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;