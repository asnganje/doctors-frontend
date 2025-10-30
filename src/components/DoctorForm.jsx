import { useEffect, useState } from "react";
import {Upload} from "lucide-react"
import { useDispatch } from "react-redux";
import { addDoctor } from "../redux/thunks/addDoctorThunk"
import { updateDoctor } from "../redux/thunks/doctorsThunk";

const DoctorForm = ({doctor, setDoc, onClose}) => {
  
  const dispatch = useDispatch()
  const [fileN, setFileN] = useState("")
  const [formData, setFormData] = useState({
    name:"",
    specialization:"",
    biography:"",
    image:null
  })
  const specializations = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Oncology",
    "Orthopedics",
    "Psychiatry",
  ]
  useEffect(()=> {
    if (doctor) {
      setFormData({
        name: doctor.name,
        specialization: doctor.specialization,
        biography: doctor.biography,
        image: doctor.image_url
      })
    }
  }, [doctor])

  const changeHandler = (e) => {
    const {name, value, files} = e.target;
    if (name === "image" && files && files[0]) {
      setFileN(files[0].name)
      setFormData((prev)=> ({...prev, image:files[0]}))
    } else {
      setFormData((prev) => ({...prev, [name]:value}))
    }
  }
  
  
  const submitHandler = async (e) => {
    e.preventDefault() 
    try {
      let payload = {...formData}
      if(doctor) {
        payload = {...payload, _id: doctor._id, id:doctor.id}                
        dispatch(updateDoctor(payload))
        setDoc(null)
      } else {
        dispatch(addDoctor(payload))
      }
    } catch (error) {
      console.error("Image upload filed", error.message)
    }
    onClose()
  }
  
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-700">{ doctor? "Update Doctor" : "Add a Doctor"}</h3>
      <form className="space-y-4" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Doctor's name"
          value={formData.name}
          onChange={changeHandler}
          required
          className="w-full border px-3 py-2 rounded-lg focus:outline-none"
        />
        <select
          name="specialization"
          value={formData.specialization}
          onChange={changeHandler}
          className="w-full border px-3 py-2 rounded-lg cursor-pointer focus:outline-none"
        >
          <option value="">Select specialization</option>
          {
            specializations.map((specialization)=> (
              <option key={specialization} value={specialization}>{specialization}</option>
            ))
          }
        </select>
        <textarea
          placeholder="Biography"
          name="biography"
          value={formData.biography}
          onChange={changeHandler}
          rows={3}
          className="w-full border px-3 py-2 rounded-lg focus:outline-none"
        />
        <div className="">
          <label className="block mb-1 text-gray-600">Upload image</label>
          <label
            htmlFor="image-upload"
            className="flex items-center gap-2 cursor-pointer text-gray-700 w-fit"
          >
            <Upload className="w-5 h-5 text-blue-500 cursor-pointer"/>
            Upload
            <span>Choose file</span>
          </label>
          <input
            type="file"
            id="image-upload"
            name="image"
            accept="image/*"
            onChange={changeHandler}
            className="w-full cursor-pointer hidden"
          />
          {
            fileN && (
              <p className="text-sm text-green-600 mt-1">Selected: {fileN}</p>
            )
          }
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-lg"
          >
            { doctor? "Update": "Save Doctor"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default DoctorForm;