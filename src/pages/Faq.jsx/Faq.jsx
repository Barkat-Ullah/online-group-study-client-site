const Faq = () => {
  return (
    <div>
        <div className="text-center">
            <h2 className="text-primary text-4xl font-bold underline underline-offset-8 ">F<span className="text-sky-400">A</span>Q</h2>
            <p className="text-tertiary font-medium mt-3 mb-8">have a questions ?</p>
        </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex-1">
          <img className="w-full h-[500px]" src="https://i.ibb.co/Lg1FTmX/pexels-leeloo-thefirst-5428832-removebg-preview.png" alt="" />
        </div>
        <div className="flex-1 my-3">
          <div className="collapse collapse-arrow bg-base-200 my-3">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            What is an online group study platform?
            </div>
            <div className="collapse-content">
              <p>An online group study platform is a web application that allows users to create and join study groups, collaborate with friends, share resources, and complete assignments together in a virtual environment.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How do I create an assignment?
            </div>
            <div className="collapse-content">
              <p>To create an assignment, log in to your account, go to the "Create Assignment" page, and fill in the required details, including the title, description, marks, thumbnail image, difficulty level, and due date.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            Can I delete an assignment I've created?
            </div>
            <div className="collapse-content">
              <p>Yes, as the creator of an assignment, you can delete it. Go to the "My Assignments" page, find the assignment, and click the delete option.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How do I submit an assignment?
            </div>
            <div className="collapse-content">
              <p>Click the "Take Assignment" button on the assignment details page, then fill in the required information, including the PDF link and a quick note. Your submission will be marked as pending.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 my-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
            How are assignments marked?
            </div>
            <div className="collapse-content">
              <p>Assignments are marked by users who have created them or been designated as examiners. Examiners can provide marks and feedback through the "Give Mark" button.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
