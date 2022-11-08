import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllBooks from "../../Pages/Home/AllBooks/AllBooks";
import BookDetails from "../../Pages/Home/BookDetails/BookDetails";
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Home/Authentication/Login/Login'
import Register from '../../Pages/Home/Authentication/Register/Register'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allbooks',
                element: <AllBooks></AllBooks>
            },
            {
                path: '/book/:id',
                element: <BookDetails></BookDetails>,
                loader: async ({ params }) => await fetch(`http://localhost:5000/book/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <div>Page Not Found || Back To Home Screen.</div>
    }
])

export default router;