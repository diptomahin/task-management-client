import { NavLink, Outlet } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { MdAddTask } from "react-icons/md";
const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] pt-10">
                <ul className="menu p-4 text-lg">
                    <>
                        <li className="font-bold"><NavLink to='/dashboard' style={({ isActive }) => {
                            return {
                                color: isActive? "black":"white",
                                backgroundColor: isActive ? "white" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}><MdAddTask /> Add Task</NavLink></li>
                    </>
                </ul>
                <hr />
                <ul className="menu p-4 text-lg">
                    <>
                        <li className="font-bold"><NavLink to='/' style={({ isActive }) => {
                            return {
                                color: isActive? "black":"white",
                                backgroundColor: isActive ? "white" : " ",
                                padding: isActive ? "10px" : " ",
                                borderRadius: isActive ? "5px" : ""

                            }
                        }}><IoIosHome /> Home</NavLink></li>
                    </>
                </ul>
            </div>
            <div></div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;