// App.jsx
import UserInput from "./components/UserInput"
import Display from "./pages/Display"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Filter from "./components/Filter"
import Title from "./components/Title"
function App() {


  return (
    
      <div className="flex flex-col ">
      
        <Navbar/>
        <Title />
        <Routes>
          <Route path="/" element={<UserInput />} />
          <Route path="/summary" element={<Display />} />
        </Routes>
      

        
        </div>
    
  )
}

export default App
