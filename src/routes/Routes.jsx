import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/news",
                element: <News></News>
            },
            {
                path: "/news/:id",
                loader: () => fetch("../news.json"),
                element: <NewsDetails></NewsDetails>
            },
            {
                path: "/user/create-account",
                element: <CreateAccount></CreateAccount>
            },
            {
                path: "/user/login",
                element: <Login></Login>
            },
            {
                path: "/contact",

            }
        ]
    },
])
export default router;