import { supabase } from "../lib/supabaseClient";

export const uploadDoctorImg = async (file) => {
  const fileName = `doctors/${crypto.randomUUID()}-${file.name}`
  
  const {error} = await supabase.storage
    .from("doctor-images")
    .upload(fileName, file)

  if(error) throw error

  const {data: publicUrlData} = supabase.storage
    .from("doctor-images")
    .getPublicUrl(fileName)
  return publicUrlData.publicUrl
}