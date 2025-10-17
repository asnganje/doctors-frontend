import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Doctors from "./pages/Doctors"
import ProtectedRoute from "./components/ProtectedRoute"
import Error from "./pages/Error"

function App() {

  return (
    <>
      <section className="max-w-6xl mx-auto bg-gray-100 shadow min-h-screen p-5 font-calligraphy">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route element={<ProtectedRoute />}>
            <Route path="/doctors" element={<Doctors />}/>
          </Route>
          <Route path="*" element={<Error />}/>
        </Routes>
      </section>
    </>
  )
}

export default App
