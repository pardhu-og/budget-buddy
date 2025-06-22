// App.jsx
import UserInput from "./components/UserInput"
import Display from "./pages/Display"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Filter from "./components/Filter"
function App() {


  return (
    
      <div>
      
        <Navbar/>
        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route path="/summary" element={<Display />} />
        </Routes>
      

        
        </div>
    
  )
}

export default App
