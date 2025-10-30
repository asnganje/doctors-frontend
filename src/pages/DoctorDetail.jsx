import { Trash2, Edit } from 'lucide-react'
import {useDispatch} from "react-redux"
import { removeDoctor } from '../redux/thunks/doctorsThunk'

const DoctorDetail = ({doctor, onDisplayForm}) => {
  const docId = doctor.id || doctor._id
  const dispatch = useDispatch()
  const destroyHandler = () => {   
    dispatch(removeDoctor(docId))
  }
  
  return(
    <div
      key={docId}
      className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition mb-6"
    >
      {(doctor.picture || doctor.image_url) && <img 
        src={doctor.picture || doctor.image_url}
        alt={doctor.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-amber-400"
      />
      }
      <h3 className="text-xl font-semibold text-gray-700 text-center">{doctor.name}</h3>
      <p className="text-gray-500 text-center">{doctor.specialization}</p>
      <p className="text-gray-700 mt-2">{doctor.biography}</p>
      <div className="my-5 border-t-2 border-gray-200">
        <button onClick={destroyHandler} className="absolute bottom-3 right-2">
          <Trash2 className="cursor-pointer text-red-400 hover:text-red-500"/>
        </button>
        <button onClick={()=>onDisplayForm(true, doctor)} className="absolute bottom-3 left-2">
          <Edit className="cursor-pointer text-gray-400 hover:text-gray-500"/>
        </button>
      </div>
    </div>
  )
}

export default DoctorDetail;