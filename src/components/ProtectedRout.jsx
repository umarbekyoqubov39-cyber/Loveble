import { Navigate } from "react-router-dom";

function ProtectedRout({ children }) {
  const accessToken = localStorage.getItem("access");

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRout;
