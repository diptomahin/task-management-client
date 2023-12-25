import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2';
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
      logOut()
      .then(
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Logged out successfully.',
          showConfirmButton: false,
          timer: 1500
      }),
      )
          .catch()
  }

  const NavLinks = <>
    <li className="text-lg font-semibold"><NavLink style={({ isActive }) => {
      return {
        color: isActive ? "#1E2C1A" : "white",
        backgroundColor: isActive ? "white" : "",

      };
    }} to="/">Home</NavLink></li>
    <li className="text-lg font-semibold"><NavLink style={({ isActive }) => {
      return {
        color: isActive ? "#1E2C1A" : "white",
        backgroundColor: isActive ? "white" : "",

      };
    }} to="/dashboard">dashboard</NavLink></li>
    <li className="text-lg font-semibold"><NavLink style={({ isActive }) => {
      return {
        color: isActive ? "#1E2C1A" : "white",
        backgroundColor: isActive ? "white" : "",

      };
    }} to="/about">about us</NavLink></li>

  </>
  return (
    <div className="navbar bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] rounded-box w-52">
            {
              NavLinks
            }
          </ul>
        </div>
        <img className="w-28 h-14" src="/public/H__1_-removebg-preview.png" alt="" />
        <h1 className="text-3xl text-white font-semibold">SmartTask</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            NavLinks
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ?
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full">
                  <img alt="user image" src={user?.photoURL} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] rounded-box w-52">
                <li className="py-2">{user?.displayName}</li>
                <li className="py-2">{user.email}</li>
                <hr />
                <li onClick={handleSignOut}><a className="hover:bg-white hover:text-purple-500">Logout</a></li>
              </ul>
            </div>
            :
            <button className="text-lg font-semibold text-white btn bg-[#00BF63] "><Link to="login">Login</Link></button>
        }
      </div>
    </div>
  );
};

export default NavBar;