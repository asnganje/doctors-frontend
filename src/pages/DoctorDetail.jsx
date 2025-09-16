import { Trash2 } from 'lucide-react'
import {useDispatch} from "react-redux"
import { removeDoctor } from '../redux/thunks/doctorsThunk'

const DoctorDetail = ({doctor}) => {
  const dispatch = useDispatch()
  const destroyHandler = () => {
    dispatch(removeDoctor(doctor.id))
  }
  
  return(
    <div
      key={doctor.id}
      className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition mb-6"
    >
      {doctor.picture_url && <img 
      // src={`http://localhost:3000/${doctor.picture_url}`}
        src={`https://rails-doctors-api-service.onrender.com${doctor.picture_url}`}
        alt={doctor.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-amber-400"
      />
      }
      <h3 className="text-xl font-semibold text-gray-700 text-center">{doctor.name}</h3>
      <p className="text-gray-500 text-center">{doctor.specialization}</p>
      <p className="text-gray-700 mt-2">{doctor.biography}</p>
      <button onClick={destroyHandler} className="absolute bottom-3 right-2">
        <Trash2 className="cursor-pointer text-red-400 hover:text-red-500"/>
      </button>
    </div>
  )
}

export default DoctorDetail;