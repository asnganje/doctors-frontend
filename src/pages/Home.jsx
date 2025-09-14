import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react";
import doctorImg from "../../public/doctor2.jpg"
import { useSelector } from "react-redux";

const Home = () => {
  const {user} = useSelector((state)=> state.auth)
  return(
    <div className="flex flex-col justify-center py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-10">
        Welcome to the <span>Aga Khan Doctors' App</span>
      </h1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-between py-10 px-5 bg-white rounded shadow min-h-[50vh] p-2">
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            Enjoy efficient management of Professional Doctors. Manage doctors efficiently. Sign up as a user to explore, add, update,
            and manage doctor records seamlessly.
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            {!user && <Link to="/Signup" className="flex items-center justify-center bg-amber-400 hover:bg-amber-500 hover:ml-2 p-2 rounded cursor-pointer text-white">Get started <ArrowRight /></Link>}
            <Link to="/doctors" className="flex items-center justify-center bg-amber-400 hover:bg-amber-500 hover:mr-2 p-2 rounded cursor-pointer text-white">Doctors List <ArrowRight /></Link>
          </div>
        </div>
        <img src={doctorImg} className="w-full md:w-[30vw] h-[50vh]" alt="doctor illustration" />
      </div>
    </div>
  )
}

export default Home;