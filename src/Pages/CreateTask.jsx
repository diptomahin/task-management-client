import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const CreateTask = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const status= "to-do";
        const task={...data, status, email:user.email}
        console.log(task)
        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!!',
                        text: 'Your Task is added',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            });
    }

    return (
        <div className='bg-green w-11/12 mx-auto py-5'>
            <div className='text-center font-bold'>
                <h2 className='text-3xl'>Add task</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full py-5">
                    <div className="label">
                        <span className="label-text  text-xl font-semibold">Task Title</span>
                    </div>
                    <input {...register("title")} type="text" placeholder="Task Title" className="input input-bordered w-full " />
                </label>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text  text-xl font-semibold">Priority</span>
                        </div>
                        <select {...register("priority")} className="select select-bordered w-full">
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
                        <input {...register("deadline")} type="date" placeholder="deadline" className="input input-bordered w-full " />
                    </label>
                </div>
                <label className="form-control py-5">
                    <div className="label">
                        <span className="label-text text-xl font-semibold">Task description</span>
                    </div>
                    <textarea  {...register("description")} className="textarea textarea-bordered h-32" placeholder="Task description"></textarea>
                </label>
                <div className='text-center'>
                <input className='btn bg-slate-700 text-white hover:bg-gradient-to-r from-[#8C52FF] via-purple-500 to-[#00BF63] hover:text-white' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default CreateTask;