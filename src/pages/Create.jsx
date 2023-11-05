// const Create = () => {
//   return (
//     <div>
//       <div className="my-10">
    //   {/* <h2 className="text-center font-bold text-4xl text-primary">Create Assignment</h2> */}
//         <div className="hero min-h-screen bg-base-200">



      
//           <div className="hero-content space-x-10 flex-col lg:flex-row">
//             <div className="text-center lg:text-left">
//               <img
//                 className="h-96 w-full rounded-lg"
//                 src="https://i.ibb.co/hKY5gbh/pexels-armin-rimoldi-5553724.jpg"
//                 alt=""
//               />
//             </div>
//             <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//               <form className="card-body">
//                 <div className="form-control">
//                   {/* <label className="label">
//                     <span className="label-text">Assignment Name</span>
//                   </label> */}
//                   <input
//                     type="text"
//                     name="title"
//                     placeholder="assignment name"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>

//                 {/* <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Description</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="description"
//                     placeholder="description"
//                     className="input input-bordered"
//                     required
//                   />    
//                 </div> */}

//                 <div className="form-control">
//                   {/* <label className="label">
//                     <span className="label-text"></span>
//                   </label> */}
//                   <select name="level" placeholder="assignment level" className="select select-bordered w-full max-w-xs">
//                     <option disabled selected>
//                       Assignment Level
//                     </option>
//                     <option>Easy</option>
//                     <option>Medium</option>
//                     <option>Hard</option>
//                   </select>
//                   {/* <input
//                     type="text"
//                     name="title"
//                     placeholder="assignment name"
//                     className="input input-bordered"
//                     required
//                   /> */}
//                 </div>
//                 <div className="form-control">
//                   {/* <label className="label">
//                     <span className="label-text">Marks</span>
//                   </label> */}
//                   <input
//                     type="text"
//                     name="marks"
//                     placeholder="assignment marks"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   {/* <label className="label">
//                     <span className="label-text">Assignment Image</span>
//                   </label> */}
//                   <input
//                     type="text"
//                     name="image"
//                     placeholder="photo url of assignment"
//                     className="input input-bordered"
//                     required
//                     src=""
//                     alt=""
//                   />
//                 </div>

//                 <div className="form-control">
//                   {/* <label className="label">
//                     <span className="label-text">Date</span>
//                   </label> */}
//                   <input
//                     type="date"
//                     name="date"
//                     placeholder="description"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control mt-6">
//                   {/* <button className="btn btn-primary">Create Assignment</button> */}
//                   <input
//                     type="submit"
//                     value="Create Assignment"
//                     className="btn btn-primary"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const Create = () => {
    const {user} = useContext(AuthContext)
  const handleSubmit =(event)=> {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    const assignmentData = {
        user:user?.email,
      title: formData.get('title'),
      level: formData.get('level'),
      marks: formData.get('marks'),
      image: formData.get('image'),
      date: formData.get('date'),
      description:formData.get('description')
    };

    axios
      .post("http://localhost:5000/assignments", assignmentData)
      .then((res) => {
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Item successfully added',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      });

 
  }


  return (
    <div>
      <div className="my-10">
        <div className="hero min-h-screen ">
          <div className="hero-content space-x-10 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img
                className="h-[400px] w-full rounded-lg"
                src="https://i.ibb.co/McLxN16/article-comunication-boss.jpg"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-center font-bold text-4xl mt-2 text-primary">Create Assignment</h2>
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <input
                    type="text"
                    name="title"
                    placeholder="Assignment Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <select
                    name="level"
                    className="select select-bordered w-full max-w-xs"
                    required
                  >
                    <option  value="" disabled>
                      Assignment Level
                    </option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="marks"
                    placeholder="Assignment Marks"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="image"
                    placeholder="Photo URL of Assignment"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                <textarea name="description" className="textarea textarea-bordered" placeholder="description"></textarea>
                </div>
                <div className="form-control mt-4">
                  <input
                    type="submit"
                    value="Create Assignment"
                    className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

