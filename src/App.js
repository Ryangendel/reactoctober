import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Bikes from "./pages/Bikes"
import Jackets from "./pages/Jackets"
import { useEffect, useState } from "react"
import { useLocation, BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import { useREIContext } from "./utils/reicontext"
import { REIProvider} from "./utils/reicontext"

const App = props => {
  // const { hash } = useLocation();
  
  // const {a}=useREIContext()
  const [x, setX] = useState(0)


  useEffect(() => {
    //calldatabase and pass in hash.productid
  }, [])

  return (
    <div>
    <Router>
      <ul>
        <li><Link to="/">TO HOME</Link></li>
        <li><Link to="/a">TO A</Link></li>
        <li><Link to="/b">TO B</Link></li>
      </ul>
      {/* CONTEXT HERE */}
      <REIProvider>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/home/mountainbikes" element={<Bikes/>} />
        <Route path="/womenjackets" element={<Jackets/>} />
        <Route path="/product/:productid/:productdescription/:bulldog" element={<Jackets/>} />
      </Routes>
      </REIProvider>
    </Router>
    </div>
  )
}

export default App;
