// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Users = () => {
    const users = [
        {
          "id": 1,
          "title": "Developers",
          "description": "Manage project tasks, track coding bugs, and prioritize sprints with ease."
        },
        {
          "id": 2,
          "title": "Corporate Professionals",
          "description": "Juggle meetings, deadlines, and client communication seamlessly."
        },
        {
          "id": 3,
          "title": "Bankers",
          "description": "Organize paperwork, follow compliance procedures, and meet financial targets effectively."
        },
        {
          "id": 4,
          "title": "Educators",
          "description": "Plan lessons, grade assignments, and collaborate with students efficiently."
        },
        {
          "id": 5,
          "title": "Entrepreneurs",
          "description": "Launch and grow their businesses with streamlined task management and goal tracking."
        },
        {
          "id": 6,
          "title": "Freelancers",
          "description": "Stay on top of client projects, invoices, and deadlines with clarity and ease."
        },
        {
          "id": 7,
          "title": "Artists & Creatives",
          "description": "Manage their creative workflow, set deadlines for inspiration, and track project progress."
        },
        {
          "id": 8,
          "title": "Students",
          "description": "Organize study schedules, prioritize assignments, and ace exams with confidence."
        },
        {
          "id": 9,
          "title": "Homemakers",
          "description": "Simplify daily chores, manage family schedules, and achieve household goals effortlessly."
        }
       ]
    return (
        <div className='p-24 min-h-screen text-center bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] font-semibold  '>
        <h1 className='text-5xl drop-shadow-lg text-white bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] font-semibold py-3 my-5 '>Our Users</h1>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-lg drop-shadow-2xl">
        {
            users.map(user =>  <SwiperSlide key={user.id} >
                <div className='text-center py-10 text-white bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]'>
                <h1 className='text-4xl font-semibold py-3'>{user.title}</h1>
                <h3 className='text-2xl text-base-300 py-3'>----How SmartTask helps----</h3>
                <p className='text-3xl w-1/2 mx-auto py-3'>{user.description}</p>
                </div>
            </SwiperSlide> )
        }
        </Swiper>
      </div>
    );
};

export default Users;