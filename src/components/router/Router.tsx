import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import NotFound from "../../pages/NotFound";
import SignIn from "../../pages/SignIn";
import Home from "../../pages/Home";
import SignUp from "../../pages/SignUp";
import Profile from "../../pages/Profile";
import EducationalProg from "../../pages/EducationalProg";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/profile", element: <Profile /> },
            { path: "/educational-programs", element: <EducationalProg /> },
            { path: "*", element: <NotFound /> },
        ],
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
]);

export default router;
