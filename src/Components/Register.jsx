import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider"

const Register = () => {

    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
   



    const handleRegister = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        // const name = event.target.name.value

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            event.target.reset()
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
        })



    }
    return (
        <>

            <form onSubmit={handleRegister} className="card-body max-w-xl mx-auto ">
                <h2 className="text-3xl font-bold" > Register</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Already Have Account? Please <Link to={'/login'} >Login</Link> </p>
        </>
    )
}

export default Register
