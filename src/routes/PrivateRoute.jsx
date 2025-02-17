/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <><div className="items-center justify-center flex">
            <span className="loading  loading-spinner text-info "></span></div></>
    }
    if (user) {
        return children
    }

    return (
        <Navigate to={'/login'} ></Navigate>
    )
}

export default PrivateRoute
