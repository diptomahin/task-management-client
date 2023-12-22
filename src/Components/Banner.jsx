
const Banner = () => {
    return (
        <div className="hero py-24 bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]">
            <div className="hero-content  flex flex-col-reverse md:flex-row">
                <div className="md:ml-10">
                    <p className="py-6 text-3xl font-semibold text-white">Ditch the sticky notes! <br /> Organize your life with <br /><span className="text-5xl">SmartTask</span><br /> the all-in-one task manager.</p>
                    <button className="btn bg-white text-2xl hover:bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] hover:text-white">Let’s Explore</button>
                </div>
                <img src="/public/Manage_Your_work__1_-removebg-preview.png" className=" rounded-lg  " />
            </div>
        </div>
    );
};

export default Banner;