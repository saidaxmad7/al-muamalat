import { ChevronDown, ChevronUp, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
    const [mobileLangOpen, setMobileLangOpen] = useState(false);
    const [programsOpen, setProgramsOpen] = useState(false);
    const [lang, setLang] = useState("ENG");
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string): boolean => location.pathname === path;

    return (
        <header className='sticky top-0 z-999 bg-white py-5 shadow-md'>
            <div className='container'>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src='/main-logo.png' alt='logo' className='h-10' />
                    </div>

                    <nav className='hidden md:flex gap-x-6 font-semibold text-[15px]  relative'>
                        <Link
                            to='/'
                            className={`${isActive("/") ? "text-black" : "text-[#009688]"} hover:text-black transition `}
                        >
                            Home
                        </Link>

                        <div className='relative'>
                            <button
                                onClick={() => setProgramsOpen(!programsOpen)}
                                className={`flex items-center gap-1 transition ${
                                    location.pathname.includes("programs")
                                        ? "text-black"
                                        : "text-[#009688]"
                                } hover:text-black`}
                            >
                                Programs
                                {programsOpen ? (
                                    <ChevronUp size={16} />
                                ) : (
                                    <ChevronDown size={16} />
                                )}
                            </button>

                            {programsOpen && (
                                <div className='absolute top-full mt-3 w-72 bg-white border rounded-md shadow-md overflow-hidden'>
                                    <Link
                                        to='/educational-programs'
                                        className={`block w-full text-left px-4 py-3 border-b transition ${
                                            isActive("/educational-programs")
                                                ? "text-black"
                                                : "text-[#686868] hover:text-black"
                                        }`}
                                    >
                                        International educational programs
                                    </Link>
                                    <button className='w-full text-left px-4 py-3 text-[#686868] hover:text-black border-b transition'>
                                        Specialized courses
                                    </button>
                                    <button className='w-full text-left px-4 py-3 text-[#686868] hover:text-black border-b transition'>
                                        Islamic Finance Literacy Course
                                    </button>
                                    <button className='w-full text-left px-4 py-3 text-[#686868] hover:text-black transition'>
                                        Certification program
                                    </button>
                                </div>
                            )}
                        </div>

                        <Link
                            to='#'
                            className='hover:text-black transition text-[#009688]'
                        >
                            Finance tools
                        </Link>

                        <Link
                            to='/contact'
                            className={`${isActive("/contact") ? "text-black" : "text-[#009688]"} hover:text-black transition`}
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className='hidden md:flex items-center'>
                        <div className='relative'>
                            <button
                                onClick={() => setOpen(!open)}
                                className='flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#009688] transition'
                            >
                                <Globe size={18} />
                                <span>{lang}</span>
                                {open ? (
                                    <ChevronUp size={16} />
                                ) : (
                                    <ChevronDown size={16} />
                                )}
                            </button>

                            {open && (
                                <div className='absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-md overflow-hidden z-50'>
                                    <button
                                        onClick={() => {
                                            setLang("ENG");
                                            setOpen(false);
                                        }}
                                        className={`block w-full text-left px-3 py-2 text-sm transition
                                        ${lang === "ENG" ? "bg-[#e0f2f1] text-[#00796b] font-semibold" : "hover:bg-[#e0f2f1]"}`}
                                    >
                                        ENG
                                    </button>
                                    <button
                                        onClick={() => {
                                            setLang("UZ");
                                            setOpen(false);
                                        }}
                                        className={`block w-full text-left px-3 py-2 text-sm transition
                                        ${lang === "UZ" ? "bg-[#e0f2f1] text-[#00796b] font-semibold" : "hover:bg-[#e0f2f1]"}`}
                                    >
                                        UZ
                                    </button>
                                </div>
                            )}
                        </div>

                        <span className='mx-8.5 h-6 w-px bg-gray-300'></span>

                        <button
                            onClick={() => navigate("/signin")}
                            className='bg-[#009688] hover:bg-[#00796b] text-white px-5 py-2 rounded-lg transition'
                        >
                            Sign in
                        </button>
                    </div>

                    <button
                        className='md:hidden'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        menuOpen
                            ? "max-h-125 opacity-100 mt-4"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <div className='flex flex-col gap-4 font-semibold text-[#009688]'>
                        <Link
                            to='/'
                            className={isActive("/") ? "text-black" : ""}
                        >
                            Home
                        </Link>

                        <button
                            onClick={() => setProgramsOpen(!programsOpen)}
                            className={`flex items-center gap-1 ${
                                location.pathname.includes("programs")
                                    ? "text-black"
                                    : ""
                            }`}
                        >
                            Programs{" "}
                            {programsOpen ? (
                                <ChevronUp size={16} />
                            ) : (
                                <ChevronDown size={16} />
                            )}
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                programsOpen ? "max-h-60" : "max-h-0"
                            }`}
                        >
                            <div className='flex flex-col border rounded-md'>
                                <Link
                                    to='/educational-programs'
                                    className={`px-4 py-3 text-left border-b ${
                                        isActive("/educational-programs")
                                            ? "text-black"
                                            : "text-[#686868]"
                                    }`}
                                >
                                    International educational programs
                                </Link>
                                <button className='px-4 py-3 text-left text-[#686868] border-b'>
                                    Specialized courses
                                </button>
                                <button className='px-4 py-3 text-left text-[#686868] border-b'>
                                    Islamic Finance Literacy Course
                                </button>
                                <button className='px-4 py-3 text-left text-[#686868]'>
                                    Certification program
                                </button>
                            </div>
                        </div>

                        <Link to='#'>Finance tools</Link>
                        <Link
                            to='/contact'
                            className={isActive("/contact") ? "text-black" : ""}
                        >
                            Contact
                        </Link>

                        <div className='pt-2 border-t'>
                            <button
                                onClick={() =>
                                    setMobileLangOpen(!mobileLangOpen)
                                }
                                className='flex items-center gap-2 text-sm font-semibold text-gray-700'
                            >
                                <Globe size={18} />
                                <span>{lang}</span>
                                {mobileLangOpen ? (
                                    <ChevronUp size={16} />
                                ) : (
                                    <ChevronDown size={16} />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    mobileLangOpen ? "max-h-40 mt-2" : "max-h-0"
                                }`}
                            >
                                <div className='flex flex-col border rounded-md overflow-hidden'>
                                    <button
                                        onClick={() => {
                                            setLang("ENG");
                                            setMobileLangOpen(false);
                                        }}
                                        className={`px-3 py-2 text-left ${lang === "ENG" ? "bg-[#e0f2f1]" : ""}`}
                                    >
                                        ENG
                                    </button>
                                    <button
                                        onClick={() => {
                                            setLang("UZ");
                                            setMobileLangOpen(false);
                                        }}
                                        className={`px-3 py-2 text-left ${lang === "UZ" ? "bg-[#e0f2f1]" : ""}`}
                                    >
                                        UZ
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => navigate("/signin")}
                            className='bg-[#009688] text-white px-4 py-2 rounded-lg w-fit'
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
