import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllBooks from "../../Pages/Home/AllBooks/AllBooks";
import BookDetails from "../../Pages/Home/BookDetails/BookDetails";
import Home from '../../Pages/Home/Home/Home'

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
            }
        ]
    },
    {
        path: '*',
        element: <div>Page Not Found || Back To Home Screen.</div>
    }
])

export default router;