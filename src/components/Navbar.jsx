import {Stethoscope} from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../redux/thunks/authThunks"

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { accessToken, railsToken } = useSelector((state)=> state.auth)
  
  const logoutHandler = async () => {
    try {
      const token = railsToken || accessToken
      dispatch(logout(token))
      navigate("/")      
    } catch (error) {
      console.error("Logout failed:", error )
    }
  }
  return (
    <nav className="bg-white shadow p-4 rounded flex justify-between items-center">
      <Link to="/">
        <Stethoscope className="text-sm mr-2"/>
      </Link>
      <div className="text-sm md:text-base tracking-tighter">
        The Doctors plaza!
      </div>
      { accessToken || railsToken ?
        <div className="">
          <button type="button" onClick={ logoutHandler } className="bg-amber-400 cursor-pointer p-2 rounded hover:bg-amber-500 text-sm md:text-base text-white md:w-[10vw] text-center">Logout</button>
        </div> 
        : 
      <div className="flex gap-5">
        <Link to="/signup" className="bg-amber-400 p-2 rounded hover:bg-amber-500 text-sm md:text-base text-white md:w-[10vw] text-center">SignUp</Link>
        <Link to="/login" className="bg-amber-400 p-2 rounded hover:bg-amber-500 text-sm md:text-base text-white md:w-[10vw] text-center">Login</Link>
      </div>
      }
    </nav>
  )
}

export default Navbar