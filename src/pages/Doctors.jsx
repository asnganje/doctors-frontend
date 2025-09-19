import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../redux/thunks/doctorsThunk";
import DoctorDetail from "./DoctorDetail";
import DoctorForm from "../components/DoctorForm";

const Doctors = () => {
  const {user} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const {doctors, loading, error} = useSelector((state)=>state.doctors)
  
  const [showForm, setShowForm] = useState(false)
  
  const [successInfo, setSuccessInfo] = useState("")

  const [selectedDoc, setSelectedDoc] = useState(null)
  
  const displayHandler = (open, doctor=null) => {
    setShowForm(open)
    setSelectedDoc(doctor)
  }

  useEffect(()=> {
    if (user) {
      setSuccessInfo("Logged in...")
      const timer = setTimeout(()=> {
      setSuccessInfo("")
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [user])

  useEffect(()=> {
    dispatch(fetchDoctors())
  }, [dispatch])
  
  return(
    <div className="relative max-w-6xl mx-auto mt-5 bg-gray-100 shadow px-4">
      {successInfo && <div
        className="absolute bottom-[-10] right-5 mb-4 italic px-2 rounded-lg text-center py-2 bg-green-100 text-green-700 text-sm font-medium shadow-sm animate-pulse"
      >{successInfo}</div>}
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Our Doctors
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
        >
          Add Doctor
        </button>
      </div>
      { loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      )
      }
      {
        error && (
          <div className="text-red-400 font-medium text-center">
            Failed to load doctors: {error}
          </div>
        )
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          doctors && doctors.map((doctor)=> (
            <DoctorDetail key={doctor.id} doctor={doctor} onDisplayForm={displayHandler} />
          ))
        }
      </div>
      {
        showForm && (
          <div className="fixed inset-0 bg-gray-400 bg-opacity-40 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg p-6">
              <button
                onClick={()=>setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                X
              </button>
              <DoctorForm
                doctor={selectedDoc}
                onClose={()=>setShowForm(false)}
              />
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Doctors;