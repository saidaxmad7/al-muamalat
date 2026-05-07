import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function MainLayout() {
    return (
        <>
            <Header />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default MainLayout;
