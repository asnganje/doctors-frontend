import { useState } from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";

const Login = () => { 
  const [formState, setFormState] = useState({
    email:"",
    password:"",
  })
  const changeHandler = (e) => {
    const {name, value} = e.target
    setFormState((prev)=>({...prev, [name]: value}))
    
  }
  const submitHandler = (e) => {
    e.preventDefault();
  }
  
  return(
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
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

        {/* {
          error && (
            <div className="text-red-500 text-sm mb-2">
              {Array.isArray(error) ? error.join(", ") : error}
            </div>
          )
        } */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-3/4 bg-amber-400 hover:bg-amber-500 cursor-pointer text-white py-2 rounded-2xl transition"
          >
            Login
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center justify-center space-y-2 mt-4">
        <p>Not registered yet?</p>
        <Link to="/signup" className="hover:underline hover:text-blue-400">Sign Up</Link>
      </div>
    </div>
  )
}

export default Login;