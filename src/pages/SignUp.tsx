import { ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Uzbekistan");

    const countries = ["Uzbekistan", "Russia", "United States"];

    return (
        <section className='min-h-screen py-6 px-4'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center gap-10'>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex items-center justify-between flex-wrap gap-4'>
                            <Link to='/'>
                                <img
                                    src='/main-logo.png'
                                    alt='logo'
                                    className='h-10'
                                />
                            </Link>
                            <div>
                                <p className='text-[18px] text-[#8f8f8f]'>
                                    Questions?
                                </p>
                                <h3 className='text-[24px] font-bold text-[#009688]'>
                                    Ask Diyor
                                </h3>
                            </div>
                        </div>

                        <h1 className='text-[52px] sm:text-[70px] lg:text-[86px] mt-10'>
                            Get started
                        </h1>

                        <p className='text-[16px] text-[#8f8f8f] mt-1'>
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/signin")}
                                className='text-[#009688] font-semibold cursor-pointer'
                            >
                                Sign in
                            </span>
                        </p>

                        <div className='mt-8 flex flex-col gap-4'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    placeholder='Enter your name'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 outline-none focus:border-[#009688]'
                                />
                            </div>

                            <div className='relative'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 outline-none focus:border-[#009688]'
                                />
                            </div>

                            <div className='relative'>
                                <div
                                    onClick={() => setOpen(!open)}
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 flex items-center justify-between cursor-pointer bg-white'
                                >
                                    <span className='text-[#555]'>
                                        {selected}
                                    </span>
                                    {open ? (
                                        <ChevronUp className='text-[#8f8f8f]' />
                                    ) : (
                                        <ChevronDown className='text-[#8f8f8f]' />
                                    )}
                                </div>

                                {open && (
                                    <div className='absolute z-20 w-full mt-2 bg-white border border-[#e0e0e0] rounded-xl shadow-lg max-h-60 overflow-y-auto'>
                                        {countries.map((c, i) => (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    setSelected(c);
                                                    setOpen(false);
                                                }}
                                                className='px-4 py-3 hover:bg-[#f5f5f5] cursor-pointer'
                                            >
                                                {c}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button className='w-full bg-[#009688] hover:bg-[#00796b] text-white text-[18px] py-3 rounded-md mt-2'>
                                Log in
                            </button>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 bg-[#009688] rounded-[40px] p-10 sm:p-14 lg:p-16 min-h-[600px] flex flex-col justify-center mt-8 lg:mt-0'>
                        <div className='flex items-center justify-center mb-10'>
                            <img
                                src='/illustration.png'
                                alt='illustration'
                                className='w-full max-w-sm'
                            />
                        </div>

                        <h3 className='text-[24px] sm:text-[30px] lg:text-[36px] text-center text-white font-bold'>
                            Welcome to Al Muamalat – Empowering Your Journey in
                            Islamic Finance
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignUp;
