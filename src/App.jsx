import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Doctors from "./pages/Doctors"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {


  return (
    <>
      <section className="max-w-6xl mx-auto bg-gray-100 shadow min-h-screen p-5 font-calligraphy">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route
            path="/doctors"
            element={
              // <ProtectedRoute>
                <Doctors />
              // </ProtectedRoute>
            }
          />
        </Routes>
      </section>
    </>
  )
}

export default App
