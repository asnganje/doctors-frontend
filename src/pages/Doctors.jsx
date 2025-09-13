import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Doctors = () => {
  const {user} = useSelector((state)=>state.auth)
  const [successInfo, setSuccessInfo] = useState("")

  useEffect(()=> {
    if (user) {
      setSuccessInfo("Logged in...")
      const timer = setTimeout(()=> {
      setSuccessInfo("")
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [user])
  
  return(
    <div className="relative">
      {successInfo && <div
        className="absolute bottom-[-10] right-5 mb-4 italic px-2 rounded-lg text-center py-2 bg-green-100 text-green-700 text-sm font-medium shadow-sm animate-pulse"
      >{successInfo}</div>}
      Doctors
    </div>
  )
}

export default Doctors;