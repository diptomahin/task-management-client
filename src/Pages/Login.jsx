
import { useContext, useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { signIn, handleGoogleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        setErrorMessage('');


        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged in successfully.',
                    showConfirmButton: false,
                    timer: 1500
            })
        })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
           
           
       

    }
    return (
        <div className="hero min-h-screen my-8 w-11/12 mx-auto rounded-lg bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] text-white">
            <div className="hero-content flex flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white"><span className="">Login</span> now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn mb-2 bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] text-white">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] text-white" >Login With Google</button>
                            {
                                errorMessage ?
                                    <div className="my-3 ">
                                        <p className="text-red-500 text-sm">{errorMessage}</p>
                                    </div>
                                    :
                                    <div></div>
                            }
                            <p className="mt-5 text-xs text-black">Do not Have an account???<span className="text-blue font-bold"><Link to='/register'> Register</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;