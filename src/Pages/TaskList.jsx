import { useContext, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const TaskList = () => {
    const { user } = useContext(AuthContext);
    const [allTasks, setAll] = useState([]);
    const [toDo, setToDo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        fetch(`https://y-ashy-delta.vercel.app/tasks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setAll(data))
    }
        , [user?.email])
    
    useEffect(()=>{
        const fToDo = allTasks.filter(task => task.status == "to-do")
        const fOngoing = allTasks.filter(task => task.status == "ongoing")
        const fCompleted = allTasks.filter(task => task.status == "completed")

        setToDo(fToDo);
        setOngoing(fOngoing);
        setCompleted(fCompleted);
    },[allTasks])
    console.log(toDo)
    console.log(ongoing)
    console.log(completed)

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed == true) {


                fetch(`https://y-ashy-delta.vercel.app/tasks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = allTasks.filter(task => task._id !== _id);
                            setAll(remaining);
                        }
                    })

            }
        })
    }


    const handleUpdate=(event, task)=>{

        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const priority = form.priority.value;
        const deadline =form.deadline.value;
        const description = form.description.value;
        const email = task.email;
        const status = task.status
        const updatedTask = {title, priority, deadline, description, email, status}
        console.log(updatedTask)
        // fetch(`http://localhost:5000/tasks/${task._id}`), {
        //        method: "PATCH", 
        //        headers: {
        //         'content-type' : 'application/json'
        //        },
        //        body: JSON.stringify(updatedBooking)
        //     })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data)
        //         if(data.modifiedCount){
        //             Swal.fire({
        //                 title: 'Success!',
        //                 text: 'Booking Updated',
        //                 icon: 'success',
        //                 confirmButtonText: 'Done'
        //               })
        //         }
        //     })
        
      }


    // const handleUpdate = (data) => {
    //     const status = "to-do";
    //     const updatedTask = { ...data, status, email: user.email }
    //     console.log(updatedTask)
    //     //     fetch(`http://localhost:5000/tasks/${task._id}`, {
    //     //    method: "PATCH", 
    //     //    headers: {
    //     //     'content-type' : 'application/json'
    //     //    },
    //     //    body: JSON.stringify(updatedTask)
    //     // })
    //     // .then(res=>res.json())
    //     // .then(data=>{
    //     //     console.log(data)
    //     //     if(data.modifiedCount){
    //     //         Swal.fire({
    //     //             title: 'Success!',
    //     //             text: 'Booking Updated',
    //     //             icon: 'success',
    //     //             confirmButtonText: 'Done'
    //     //           })
    //     //     }
    //     // })

    // }



    return (
        <div className="overflow-x-auto">
            <div className="mb-5">
                <div className="text-center text-white bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]">
                    <h1 className="text-xl font-semibold py-1">To-do List</h1>
                </div>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Title</th>
                            <th>Priority</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    {
                        toDo.map(task =>
                            <tbody key={task._id}>
                                <tr>
                                    <th onClick={() => handleDelete(task)} className="text-xl btn">
                                        <MdDelete className="" />
                                    </th>
                                    <td>{task.title}</td>
                                    <td>{task.priority}</td>
                                    <td>{task.description}</td>
                                    <td>{task.deadline}</td>
                                    <td className="text-xl"><label htmlFor="my_modal_6" className="btn">Update</label></td>
                                    {/* The button to open modal */}
                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <div>
                                                <form onSubmit={()=>handleUpdate(task._id)}>
                                                    <label className="form-control w-full py-5">
                                                        <div className="label">
                                                            <span className="label-text  text-xl font-semibold">Task Title</span>
                                                        </div>
                                                        <input name="title" type="text"   className="input input-bordered w-full " />
                                                    </label>
                                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                                        <label className="form-control w-full ">
                                                            <div className="label">
                                                                <span className="label-text  text-xl font-semibold">Priority</span>
                                                            </div>
                                                            <select name="priority" defaultValue={task.priority} className="select select-bordered w-full">
                                                                <option disabled selected>Select Task Priority</option>
                                                                <option value="low">low</option>
                                                                <option value="moderate">moderate</option>
                                                                <option value="high">high</option>
                                                            </select>
                                                        </label>
                                                        <label className="form-control w-full ">
                                                            <div className="label">
                                                                <span className="label-text  text-xl font-semibold">Deadline</span>
                                                            </div>
                                                            <input name="deadline" type="date"  defaultValue={task.deadline} className="input input-bordered w-full " />
                                                        </label>
                                                    </div>
                                                    <label className="form-control py-5">
                                                        <div className="label">
                                                            <span className="label-text text-xl font-semibold">Task description</span>
                                                        </div>
                                                        <textarea  name="description" defaultValue={task.description} className="textarea textarea-bordered h-32" placeholder="Task description"></textarea>
                                                    </label>
                                                    <div className='text-center'>
                                                        <input className='btn bg-slate-700 text-white hover:bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] hover:text-white' type="submit" />
                                                    </div>
                                                    <div className="modal-action">
                                                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </tr>

                            </tbody>
                        )
                    }
                </table>
            </div>
            <div className="mb-5">
           <div className="text-center mt-3 text-white bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]">
            <h1 className="text-xl font-semibold py-1">On-going List</h1>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Description</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                {
                    ongoing.map(task =>              
                       <tbody key={task._id}>
                        <tr>
                            <td>{task.title}</td>
                            <td>{task.priority}</td>
                            <td>{task.description}</td>
                            <td>{task.deadline}</td>
                        </tr>
                    </tbody>
    )
                }
            </table>
           </div>
           <div>
           <div className="text-center mt-3 text-white bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63]">
            <h1 className="text-xl font-semibold py-1">completed List</h1>
            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Description</th>
                        <th>Deadline</th>
                    </tr>
                </thead>
                {
                    completed.map(task =>              
                       <tbody key={task._id}>
                        <tr>
                            <td>{task.title}</td>
                            <td>{task.priority}</td>
                            <td>{task.description}</td>
                            <td>{task.deadline}</td>
                        </tr>
                    </tbody>
    )
                }
            </table>
           </div>
        </div>
    );
};

export default TaskList;