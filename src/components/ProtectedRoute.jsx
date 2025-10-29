import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const {accessToken, railsToken} = useSelector((state)=>state.auth)
  return (accessToken || railsToken)? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute;