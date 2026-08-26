import Nav from "./components/Nav"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import "./App.css"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </>
  )
}

export default App
