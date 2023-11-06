import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignment from "../pages/Assignment";
import Create from "../pages/Create";
import Details from "../pages/Details";
import Update from "../pages/Update";
import MyAssignments from "../pages/MyAssignments";
import Home from "../pages/Home";
import AllAssignments from "../pages/AllAssignments";
import PrivateRouter from "./PrivateRouter";
import ErrorElement from "../components/layout/ErrorElement";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('http://localhost:5000/assignments')
                
            },
            {
                path:'allAssignment',
                element:<AllAssignments></AllAssignments>
            },
            {
                path:'assignment',
                element:<Assignment></Assignment>,
                loader:() => fetch('http://localhost:5000/assignments')
               
            },
            {
                path:'myAssignment',
                element:<MyAssignments></MyAssignments>,
                loader:() => fetch('http://localhost:5000/assignments')
            },
            {
                path:'/details/:id',
                element:<PrivateRouter><Details></Details></PrivateRouter>,
                loader:({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path: '/update/:id',
                element:<PrivateRouter><Update></Update></PrivateRouter>,
                loader:({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path:'create',
                element:<Create></Create>,
            
            },
            {
                path:'contact',
                element:<Contact></Contact>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])

export default router;