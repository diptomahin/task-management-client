import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div  data-aos="fade-down" className="hero min-h-screen py-24 bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]">
            <div className="hero-content  flex flex-col-reverse md:flex-row">
                <div className="md:ml-10 ">
                    <p className="py-6 text-3xl font-semibold text-white">Ditch the sticky notes! <br /> Organize your life with <br /><span className="text-5xl">SmartTask</span><br /> the all-in-one task manager.</p>
                    <Link to='/dashboard/task'><button className="btn bg-white text-2xl hover:bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] hover:text-white">Let’s Explore</button></Link>
                </div>
                <img src="/public/Manage_Your_work__1_-removebg-preview.png" className=" rounded-lg  " />
            </div>
        </div>
    );
};

export default Banner;