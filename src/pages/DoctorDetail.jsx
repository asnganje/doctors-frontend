const DoctorDetail = ({doctor}) => {
  
  return(
    <div
      key={doctor.id}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition mb-6"
    >
      {doctor.picture_url && <img 
        src={`https://rails-doctors-api-service.onrender.com${doctor.picture_url}`}
        alt={doctor.name}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-amber-400"
      />
      }
      <h3 className="text-xl font-semibold text-gray-700 text-center">{doctor.name}</h3>
      <p className="text-gray-500 text-center">{doctor.specialization}</p>
      <p className="text-gray-700 mt-2">{doctor.biography}</p>

    </div>
  )
}

export default DoctorDetail;