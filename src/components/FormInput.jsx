const FormInput = ({label, onChange, placeholder, itemName, value, autoComplete, type="text"}) => {
  return(
    <div className="mb-4">
      <label className="block text-left text-gray-700 font-medium mb-2">{label}</label>
      <input
      type= {type}
      name={itemName}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  )
}

export default FormInput;