import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import AllBooks from "../../Pages/Home/AllBooks/AllBooks";
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
            }
        ]
    },
    {
        path: '*',
        element: <div>Page Not Found || Back To Home Screen.</div>
    }
])

export default router;