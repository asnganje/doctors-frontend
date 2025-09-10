import {Stethoscope} from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 rounded flex justify-between items-center">
      <Link to="/doctors">
        <Stethoscope className="text-sm mr-2"/>
      </Link>
      <div className="text-sm md:text-base tracking-tighter">
        The Doctors plaza!
      </div>
      <div className="flex gap-5">
        <Link to="/signup" className="bg-amber-400 p-2 rounded hover:bg-amber-500 text-sm md:text-base text-white md:w-[10vw] text-center">SignUp</Link>
        <Link to="/login" className="bg-amber-400 p-2 rounded hover:bg-amber-500 hover:ml-2 text-sm md:text-base text-white md:w-[10vw] text-center">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar