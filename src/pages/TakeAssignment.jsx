import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";

const TakeAssignment = () => {
    const data = useLoaderData()
    console.log(data);
    const {title, marks} = data;
    const {user} = useContext(AuthContext)

    const handleQuizSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const quizData = {
            marks:marks,
            title: title,
            email:user?.email,
            name:user?.displayName,
            link: formData.get('link'),
            feedback: formData.get('feedback')
        }
        console.log(quizData);

        axios
        .post("http://localhost:5000/quiz", quizData)
        .then((res) => {
          console.log(res.data)
          if(res.data.insertedId){
              Swal.fire({
                  title: 'Success!',
                  text: 'Quiz successfully added',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
        });
    }

  return (
    <div className="my-28 bg-sky-100 w-[600px] mx-auto rounded-xl rounded-br-[80px]">
      <h2 className="text-center text-primary my-5 text-4xl font-bold">
        Make your Quiz
      </h2>

      <div className="">
        <div className="hero-content ">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleQuizSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"></span>
                </label>
                <input type="text" name="link" placeholder="Drop Your Quiz Link" className="input input-bordered input-info w-full max-w-xs" />
              </div>
              <textarea name="feedback" className="textarea textarea-info my-3" placeholder="Enter Your Note"></textarea>

              <div className="form-control mt-6">
                <button  className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeAssignment;
