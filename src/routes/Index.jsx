import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Assignment from "../pages/Assignment";
import Create from "../pages/Create";
import Details from "../pages/Details";
import Update from "../pages/Update";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'about',
                element:<About></About>,
                loader:() => fetch('http://localhost:5000/assignments')
            },
            {
                path:'assignment',
                element:<Assignment></Assignment>,
              
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params}) => fetch(`http://localhost:5000/assignments/${params.id}`)
            },
            {
                path: '/update/:id',
                element:<Update></Update>,
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