import { Link, useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    return (
        <section className='min-h-screen py-6 px-4'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-17'>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex items-center justify-between flex-wrap gap-4'>
                            <Link to='/'>
                                <img
                                    src='/main-logo.png'
                                    alt='logo'
                                    className='h-10'
                                />
                            </Link>
                            <div className='flex flex-col'>
                                <p className='font-[var(--third-family)] font-normal text-[18px] text-[#8f8f8f]'>
                                    Questions?
                                </p>
                                <h3 className='font-[var(--third-family)] font-bold text-[24px] text-[#009688]'>
                                    Ask Diyor
                                </h3>
                            </div>
                        </div>

                        <h1 className='font-[var(--font7)] font-normal text-[52px] sm:text-[70px] lg:text-[86px] tracking-[0.04em] text-black mt-10 lg:mt-26'>
                            Get started
                        </h1>

                        <div className='mt-8 flex flex-col gap-4'>
                            <div className='relative'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 text-[16px] font-[var(--third-family)] outline-none focus:border-[#009688] transition-colors'
                                />
                                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-[#8f8f8f]'>
                                    ✉
                                </span>
                            </div>

                            <input
                                type='password'
                                placeholder='Password'
                                className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 text-[16px] font-[var(--third-family)] outline-none focus:border-[#009688] transition-colors'
                            />

                            <button
                                type='button'
                                className='w-full bg-[#009688] hover:bg-[#00796b] text-white text-[18px] font-semibold py-3 rounded-md transition-colors'
                            >
                                Sign in
                            </button>

                            <button
                                type='button'
                                onClick={() => navigate("/signup")}
                                className='w-full text-center text-[#8f8f8f] hover:text-[#009688] text-[15px] font-[var(--third-family)] transition-colors cursor-pointer bg-transparent border-none'
                            >
                                Create a new account !
                            </button>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 bg-[#009688] rounded-[40px] p-8 sm:p-12 lg:p-14 relative mt-16 lg:mt-0'>
                        <div className='flex items-center justify-center mb-10 mt-10 lg:mt-0 lg:mb-22'>
                            <img
                                src='/illustration.png'
                                alt='illustration sign in image'
                                className='w-full max-w-xs sm:max-w-sm object-contain'
                            />
                        </div>

                        <h3 className='font-[var(--third-family)] font-bold text-[24px] sm:text-[30px] lg:text-[36px] text-center text-white'>
                            Welcome to Al Muamalat – Empowering Your Journey in
                            Islamic Finance
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
