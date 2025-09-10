import FormInput from "../components/FormInput";

const Signup = () => {
  const changeHandler = () => {
    console.log("Change action");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submit action");
    
  }
  return(
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
      <form onSubmit={submitHandler}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your email..."
          autoComplete="email"
          onChange={changeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          itemName="password"
          placeholder="Enter password"
          autoComplete="new-password"
          onChange={changeHandler}
        />

        <FormInput
          label="Confirm password"
          type="password"
          name="password"
          placeholder="Confirm your password"
          autoComplete="new-password"
          onChange={changeHandler}
        />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-3/4 bg-amber-400 hover:bg-amber-500 cursor-pointer text-white py-2 rounded-2xl transition"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signup;