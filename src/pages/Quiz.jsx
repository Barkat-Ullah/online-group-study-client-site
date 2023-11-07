


/* eslint-disable react/no-unknown-property */
const Quiz = ({ quiz, handleQuiz  }) => {
  console.log(quiz);

  const {_id, marks, title, email, name, feedback, link } = quiz;

  const modalId = `my_modal_${_id}`;
  const closeModal = () => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.close();
    }
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{title}</td>
      <td>{link}</td>
      <td></td>
      <td>{marks}</td>

      <button
        className="btn bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white"
        onClick={() => document.getElementById(modalId).showModal()}
      >
        Give Marks
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold text-lg">Hello!</h3>
          <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

          <form onSubmit={(e) => handleQuiz(e, _id )}>
            <input
              type="text"
              name="marks"
              defaultValue={marks}
              placeholder="give marks"
              className="input  my-2 input-bordered input-info w-full max-w-xs"
            />

            <input className=" btn  w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-500 transition delay-150, duration-700, ease-in-out text-white " type="submit" value="Click" />

          </form>
        </div>
      </dialog>
    </tr>
  );
};

export default Quiz;
