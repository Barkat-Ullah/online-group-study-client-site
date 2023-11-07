import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const updateAssign = useLoaderData();

  const { _id,title, level, marks, image, date, description} = updateAssign
  console.log(updateAssign);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const assignmentData = {
      
      title: formData.get("title"),
      level: formData.get("level"),
      marks: formData.get("marks"),
      image: formData.get("image"),
      date: formData.get("date"),
      description: formData.get("description"),
    };

    axios
      .put(`https://online-study-server.vercel.app/${_id}`, assignmentData)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Item successfully Updated",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="my-10">
        <div className="hero min-h-screen ">
          <div className="hero-content space-x-10 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img
                className="h-[400px] w-full rounded-lg"
                src="https://i.ibb.co/wW6p549/Update-Boss-1024x512.png"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h2 className="text-center font-bold text-4xl mt-2 text-primary">
                Updated Assignment
              </h2>
              <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-control">
                  <input
                    type="text"
                    name="title"
                    defaultValue={title}
                    placeholder="Assignment Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <select
                    name="level"
                    defaultValue={level}
                    className="select select-bordered w-full max-w-xs"
                    required
                  >
                    <option value="" disabled>
                      Assignment Level
                    </option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                  </select>
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="marks"
                    defaultValue={marks}
                    placeholder="Assignment Marks"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Photo URL of Assignment"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="date"
                    name="date"
                    defaultValue={date}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="description"
                    defaultValue={description}
                    className="textarea textarea-bordered"
                    placeholder="description"
                  ></textarea>
                </div>
                <div className="form-control mt-4">
                  <input
                    type="submit"
                    value="Update Assignment"
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

export default Update;
