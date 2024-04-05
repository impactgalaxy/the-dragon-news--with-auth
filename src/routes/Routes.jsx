import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";

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
            }
        ]
    },
])
export default router;