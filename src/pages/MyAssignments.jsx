import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import Card from "./Card";
import NoData from "./NoData";

const MyAssignments = () => {
    const myAssign = useLoaderData();
    console.log( myAssign);

    // const myAssignObject = JSON.parse(myAssign);
    // console.log('obj', myAssignObject);

    const { user } = useContext(AuthContext);
    const userAssign = myAssign?.filter(myAssignment => myAssignment.user == user?.email);
    const [removes, setRemoves] = useState(userAssign);
    console.log(userAssign);

    return (
        <div className="my-16 md:my-32">
            {removes.length === 0 ? (
                <NoData></NoData>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {removes.map(card => (
                        <Card key={card._id} removes={removes} setRemoves={setRemoves} card={card}></Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyAssignments;



