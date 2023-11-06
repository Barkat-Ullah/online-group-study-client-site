import axios from "axios";
import Swal from "sweetalert2";

const Card = ({ card, removes, setRemoves }) => {
  const { _id, title, level, marks, image, date, description } = card;
  console.log(card, removes, setRemoves);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(result => {
        if(result.isConfirmed){
            axios.delete(`http://localhost:5000/assignments/${_id}`)
            .then( res => {
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
                    )
                    const remaining = removes?.filter(remove => remove._id !== id)
                    console.log(remaining);
                    setRemoves(remaining)
                }
            })
        }
    })


  }

  return (
    

    <div>
      <div className="overflow-hidden h-full bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <figure>
          <img
            src={image}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>

        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {title}
            </h3>
            <p className=" text-slate-400"> Marks : {marks}</p>
            <span>Date : {date}</span>
          </header>
          <p>
            {description}
          </p>
        </div>

        <div className="flex justify-end p-6 ">
          <button onClick={() => handleDelete(_id)} className="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none">
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
