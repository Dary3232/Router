import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"


export const CheckAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if(!auth.user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children
}