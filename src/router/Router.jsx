import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import Profile from "../pages/Profile";
import EducationalProg from "../pages/EducationalProg";
import Home from "../pages/Home";
import Verify from "../pages/auth/components/Verify";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "profile", element: <Profile /> },
            { path: "educational-programs", element: <EducationalProg /> },
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
    {
        path: "/verify",
        element: <Verify />,
    },
]);

export default router;
