import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Phone } from "lucide-react";
import { message } from "antd";
import { toast } from "react-toastify";

function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const auth = useAuth();

    const { handleSubmit, register } = useForm({
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        const { first_name, last_name, email, phone, password } = data;
        try {
            await auth.register({
                first_name,
                last_name,
                email,
                phone,
                password,
            });
            localStorage.setItem("verifyEmail", email);
            navigate("/verify", { state: { email } });
        } catch (error) {
            const msg = error?.response?.data?.message || "Xatolik yuz berdi!";
            toast.error(msg);
        }
    };

    const onError = () => {
        messageApi.open({
            type: "error",
            content: "Iltimos, barcha inputlarni to‘ldiring!",
        });
    };

    return (
        <section className='min-h-screen py-6 px-4'>
            {contextHolder}

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
                        </div>

                        <h1 className='text-[52px] sm:text-[70px] lg:text-[86px] mt-10'>
                            Get started
                        </h1>
                        <p className='text-lg text-slate-500'>
                            Already have an account?{" "}
                            <Link
                                to='/signin'
                                className='text-[#009688] font-semibold hover:underline'
                            >
                                Sign in
                            </Link>
                        </p>

                        <form
                            onSubmit={handleSubmit(onSubmit, onError)}
                            className='mt-8 flex flex-col gap-4'
                        >
                            <div className='grid grid-cols-2 gap-3'>
                                <div className='relative'>
                                    <input
                                        type='text'
                                        placeholder='First name'
                                        className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 outline-none focus:border-[#009688]'
                                        {...register("first_name", {
                                            required: true,
                                        })}
                                    />
                                    <User
                                        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                                        size={18}
                                    />
                                </div>

                                <div className='relative'>
                                    <input
                                        type='text'
                                        placeholder='Last name'
                                        className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 outline-none focus:border-[#009688]'
                                        {...register("last_name", {
                                            required: true,
                                        })}
                                    />
                                    <User
                                        className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                                        size={18}
                                    />
                                </div>
                            </div>

                            <div className='relative'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 outline-none focus:border-[#009688]'
                                    {...register("email", { required: true })}
                                />
                                <Mail
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                                    size={18}
                                />
                            </div>

                            <div className='relative'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder='Enter password'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 outline-none focus:border-[#009688]'
                                    {...register("password", {
                                        required: true,
                                    })}
                                />
                                <button
                                    type='button'
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>

                            <div className='relative'>
                                <input
                                    type='tel'
                                    placeholder='+998901234567'
                                    className='w-full border border-[#e0e0e0] rounded-md px-4 py-3 pr-10 outline-none focus:border-[#009688]'
                                    {...register("phone", { required: true })}
                                />
                                <Phone
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400'
                                    size={18}
                                />
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-[#009688] hover:bg-[#00796b] text-white text-[18px] py-3 rounded-md mt-2'
                            >
                                Sign up
                            </button>
                        </form>
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
