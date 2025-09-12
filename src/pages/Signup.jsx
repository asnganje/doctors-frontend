import { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAuthState } from "../redux/slices/authSlice";
import { signUpUser } from "../redux/thunks/authThunks";

const Signup = () => {
  const dispatch = useDispatch()
  const {loading, error, user } = useSelector((state)=>state.auth)
  const [successInfo, setSuccessInfo] = useState("")
  const navigate = useNavigate()  
  const [formState, setFormState] = useState({
    email:"",
    password:"",
    password_confirmation:""
  })
  const changeHandler = (e) => {
    const {name, value} = e.target
    setFormState((prev)=>({...prev, [name]: value}))
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUpUser(formState))
  }

  useEffect(()=> {
    if(user) {
      setSuccessInfo(`Success, redirecting to login...`)
      setFormState({
        email:"",
        password:"",
        password_confirmation:""
      })
      const timer = setTimeout(()=> {
        setSuccessInfo("")
        dispatch(resetAuthState())
        navigate("/login")
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [user, dispatch, navigate])
  
  return(
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
      {successInfo && <div
        className="mb-4 rounded-lg text-center py-2 bg-green-100 text-green-700 text-sm font-medium shadow-sm animate-pulse"
        >{successInfo}</div>}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          itemName="email"
          placeholder="Enter your email..."
          autoComplete="email"
          value={formState.email}
          onChange={changeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          itemName="password"
          placeholder="Enter password"
          autoComplete="new-password"
          value={formState.password}
          onChange={changeHandler}
        />

        <FormInput
          label="Confirm password"
          type="password"
          itemName="password_confirmation"
          placeholder="Confirm your password"
          autoComplete="confirm-password"
          value={formState.password_confirmation}
          onChange={changeHandler}
        />
        {
          error && (
            <div className="text-red-500 text-sm mb-2">
              {Array.isArray(error) ? error.join(", ") : error}
            </div>
          )
        }
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-3/4 bg-amber-400 hover:bg-amber-500 cursor-pointer text-white py-2 rounded-2xl transition"
            disabled={loading}
          >
            {loading? "Signing Up..." : "Sign Up" }
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center space-y-2 mt-4">
        <p>Already registered?</p>
        <Link to="/login" className="hover:underline hover:text-blue-400">Login</Link>
      </div>
    </div>
  )
}

export default Signup;