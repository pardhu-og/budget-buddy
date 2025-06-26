// App.jsx
import UserInput from "./components/UserInput"
import Display from "./pages/Display"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Filter from "./components/Filter"
import Title from "./components/Title"
import About from "./pages/About"
function App() {


  return (
    
      <div className="flex flex-col bg-gray-200 lg:border-4 lg:border-gray-400/50 min-h-screen">
      
        <Navbar/>
        <Title />
        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route path="/summary" element={<Display />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      

        
        </div>
    
  )
}

export default App
