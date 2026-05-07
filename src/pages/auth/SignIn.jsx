import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { Eye, EyeOff, Mail } from "lucide-react";

function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const auth = useAuth();
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        // formstate: { errors },
    } = useForm({ defaultValues: { email: "", password: "" } });

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            await auth.login({ email, password });
            localStorage.setItem("verifyEmail", email);
            navigate("/verify", { state: { email } });
        } catch (error) {
            const msg = error?.response?.data?.message || "Xatolik yuz berdi!";
            if (msg === "Email is not verified.") {
                localStorage.setItem("verifyEmail", email);
                navigate("/verify", { state: { email } });
            } else {
                toast.error(msg);
            }
        }
    };

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

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className='mt-8 flex flex-col gap-4'
                        >
                            <div className='relative'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 text-[16px] font-[var(--third-family)] outline-none focus:border-[#009688] transition-colors'
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                    })}
                                />
                                <span className='absolute right-3 top-1/2 -translate-y-1/2 text-[#8f8f8f]'>
                                    <Mail size={20} />
                                </span>
                            </div>
                            <div className='relative flex items-center'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Password'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 text-[16px] font-[var(--third-family)] outline-none focus:border-[#009688] transition-colors'
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <button
                                    type='button'
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className='absolute right-3 text-slate-400 cursor-pointer p-1'
                                >
                                    {showPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-[#009688] hover:bg-[#00796b] text-white text-[18px] font-semibold py-3 rounded-md transition-colors'
                            >
                                Sign in
                            </button>
                        </form>
                        <button
                            type='button'
                            onClick={() => navigate("/signup")}
                            className='w-full text-center text-[#8f8f8f] hover:text-[#009688] text-[15px] font-[var(--third-family)] transition-colors cursor-pointer bg-transparent border-none mt-4'
                        >
                            Create a new account !
                        </button>
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
