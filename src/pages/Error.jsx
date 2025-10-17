import { Link } from "react-router-dom";
import img from "../assets/not-found.svg"

const Error = () => {
    return(
      <div className="min-h-[100vh] text-center flex items-center justify-center">
        <div className="">
          <img src={img} alt="not found" className="w-[90vw] max-w-[600px] -mt-[3rem] mb-[2rem]" />
          <h3 className="mb-[0.5rem]">Ohh! Page not found</h3>
          <p className="leading-8">We cannot find the page you are looking for</p>
          <Link to="/" className="text-orange-600 capitalize">Back home</Link>
        </div>
      </div>
    )
}

export default Error;