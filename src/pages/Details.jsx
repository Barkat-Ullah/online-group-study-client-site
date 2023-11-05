import { useLoaderData } from "react-router-dom";


const Details = () => {
    const detailPage = useLoaderData()
    console.log(detailPage);
    return (
        <div>
            <h2 className="mt-24">Details</h2>
        </div>
    );
};

export default Details;