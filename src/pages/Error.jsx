import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg"

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return(
      <div className="min-h-[100vh] text-center flex items-center justify-center">
        <div className="">
          <img src={img} alt="not found" className="w-[90vw] max-w-[600px] -mt-[3rem] mb-[2rem]" />
          <h3 className="mb-[0.5rem]">Ohh! Page not found</h3>
          <p className="leading-8">We cannot find the page you are looking for</p>
          <Link to="/dashboard" className="text-teal-600 capitalize">Back home</Link>
        </div>
      </div>
    )
  }
  
  return(
    <div className="">
      <h1>Error</h1>
      <Link to="/">Back home</Link>
    </div>
  )
}

export default Error;