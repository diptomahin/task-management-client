import { NavLink, Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdAddTask } from "react-icons/md";
import { useContext } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../Providers/AuthProvider";
const Dashboard = () => {
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
          })
          )
            .catch()
    }
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] pt-10">
                <ul className="menu p-4 text-lg">
                    <>
                        <li className="font-bold"><NavLink to='/dashboard' style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "white",
                                backgroundColor: isActive ? "white" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}><MdAddTask /> Add Task</NavLink></li>
                    </>
                </ul>
                <ul className="menu p-4 text-lg">
                    <>
                        <li className="font-bold"><NavLink to='/tasklist' style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "white",
                                backgroundColor: isActive ? "white" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}><MdAddTask />Task list</NavLink></li>
                    </>
                </ul>
                <hr />
                <ul className="menu p-4 text-lg">
                    <>
                        <li className="font-bold"><NavLink to='/' style={({ isActive }) => {
                            return {
                                color: isActive ? "black" : "white",
                                backgroundColor: isActive ? "white" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}><IoIosHome /> Home</NavLink></li>
                    </>
                </ul>
                <hr />
                <div className="w-11/12 mx-auto py-5">
                                <div className="btn btn-ghost btn-circle avatar">
                                    <div className="w-14 rounded-full">
                                        <img alt="user image" src={user?.photoURL} />
                                    </div>
                                </div>
                                <div>
                                <ul  className="menu menu-sm dropdown-content text-white mt-3 z-[1] p-2 shadow bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] rounded-box w-52">
                                    <li className="py-2">{user?.displayName}</li>
                                    <li className="py-2">{user?.email}</li>
                                    <hr />
                                    <li className="py-2" onClick={handleSignOut}><a className="hover:bg-white hover:text-purple-500">Logout</a></li>
                                </ul>
                                </div>
                            </div>
            </div>
            <div></div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;