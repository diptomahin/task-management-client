import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const { createUser } = useContext(AuthContext)

  const handleRegister = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log(email, password, name, photo)
    setErrorMessage('')
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/
    if(password.length<6){
      setErrorMessage('Your Password Should Contain at least 6 characters')
      return;
    }
    else if (!/[A-Z]/.test(password)){
      setErrorMessage('Your Password Should Contain at least 1 one uppercase letter')
      return;
    }

    else if(!/[!@#$%^&*]/.test(password))
    {
      setErrorMessage('Your Password Should Contain at least 1 one special character')
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      })
  }
  return (
    <div className="hero min-h-screen my-8 w-11/12 mx-auto rounded-lg  bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]">
      <div className="hero-content flex flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-white"><span className="">Register</span> now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-Url</span>
              </label>
              <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
            </div>
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
              <button className="btn  bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] text-white" >Register</button>
              {
                errorMessage ?
                  <div className="my-3 ">
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                  </div>
                  :
                  <div></div>
              }
              <p className="mt-5 text-xs">Already have an account???<span className="text-blue font-bold"><Link to='/login'> Login Now!</Link></span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;