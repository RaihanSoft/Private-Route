import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Providers/AuthProvider"

const Login = () => {

    const navigate = useNavigate()

    const { loginUser, signInWithGoogle } = useContext(AuthContext)

    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                event.target.reset()
                navigate('/')
            })
            .catch(error => console.log(error))


    }
    const handlesignInWithGoogle =()=>{
        signInWithGoogle()
        .then(result => {
            console.log(result)
            navigate('/')
        } )
        .catch(error=> {
            console.log(error.message)
        })


    }


    return (
        <>

            <form onSubmit={handleLogin} className="card-body max-w-xl mx-auto ">
                <h2 className="text-3xl font-bold" > Login</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <button onClick={handlesignInWithGoogle} className="btn btn-success ">Google</button>

            </form>
            <p className="text-center">New to this website? please <Link to={'/register'} >Register</Link> </p>

        </>

    )
}

export default Login
