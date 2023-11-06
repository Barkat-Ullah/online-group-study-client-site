import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import Card from "./Card";


const MyAssignments = () => {
    const myAssign = useLoaderData()
    console.log(myAssign);
    const {user} = useContext(AuthContext)
    const userAssign = myAssign.filter(myAssignment => myAssignment.user == user?.email)
    const [removes, setRemoves] = useState(userAssign)
    console.log(userAssign);

    return (
        <div className="my-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {
                    removes.map(card => <Card key={card._id} removes={removes} setRemoves={setRemoves} card={card}></Card>)
                }
            </div>
            
        </div>
    );
};

export default MyAssignments;