import { useState } from "react";
import { courses } from "../data/cources";

function Profile() {
    const [active, setActive] = useState("courses");

    return (
        <section className='py-10 md:py-20 bg-gray-50 min-h-screen'>
            <div className='container mx-auto px-4 max-w-7xl'>
                <div className='flex flex-wrap gap-4 mb-8 justify-center md:justify-start'>
                    <button
                        onClick={() => setActive("profile")}
                        className={`w-full sm:w-[157px] px-[10px] py-[9px] rounded-[10px] font-medium transition border
                        ${
                            active === "profile"
                                ? "bg-[#009688] text-white border-[#009688]"
                                : "bg-white border-gray-300 text-gray-600 hover:bg-[#009688] hover:text-white"
                        }`}
                    >
                        Profile
                    </button>

                    <button
                        onClick={() => setActive("courses")}
                        className={`w-full sm:w-[157px] px-[10px] py-[9px] rounded-[10px] font-medium transition border
                        ${
                            active === "courses"
                                ? "bg-[#009688] text-white border-[#009688]"
                                : "bg-white border-gray-300 text-gray-600 hover:bg-[#009688] hover:text-white"
                        }`}
                    >
                        Courses
                    </button>
                </div>

                <div>
                    {active === "profile" && (
                        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10'>
                            <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-10'>
                                <div className='flex flex-col md:flex-row items-center gap-6'>
                                    <img
                                        src='/profile-photo.png'
                                        alt='profile'
                                        className='w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-50'
                                    />
                                    <h2 className='text-3xl md:text-4xl font-semibold text-gray-800 text-center md:text-left'>
                                        Alexa Rawles
                                    </h2>
                                </div>

                                <button className='w-full md:w-auto bg-[#009688] text-white px-8 py-2.5 rounded-lg font-medium hover:bg-[#00796b] transition'>
                                    Save
                                </button>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='text-sm font-medium text-gray-600'>
                                        First Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Your First Name'
                                        className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:border-[#009688] focus:bg-white outline-none transition'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label className='text-sm font-medium text-gray-600'>
                                        Last Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Your Last Name'
                                        className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:border-[#009688] focus:bg-white outline-none transition'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label className='text-sm font-medium text-gray-600'>
                                        Address
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Your Address'
                                        className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:border-[#009688] focus:bg-white outline-none transition'
                                    />
                                </div>

                                <div className='space-y-2'>
                                    <label className='text-sm font-medium text-gray-600'>
                                        Birthday
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Enter Your Birthday'
                                        className='w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:border-[#009688] focus:bg-white outline-none transition'
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {active === "courses" && (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className='bg-white rounded-[20px] p-4 shadow-sm border border-gray-100 '
                                >
                                    <div
                                        className={`${course.color} rounded-[15px] h-[220px] flex items-center justify-center relative mb-4 overflow-hidden`}
                                    >
                                        <span className='absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[12px] font-semibold text-gray-700'>
                                            {course.category}
                                        </span>
                                        <img
                                            src={course.image}
                                            alt={course.category}
                                            className='h-4/5 w-auto object-contain transition-transform hover:scale-105 duration-300'
                                        />
                                    </div>

                                    <h3 className='text-gray-800 font-semibold mb-2 truncate text-lg'>
                                        {course.title}
                                    </h3>

                                    <div className='flex items-center gap-1 mb-6'>
                                        {[...Array(5)].map((_, i) => (
                                            <span
                                                key={i}
                                                className={
                                                    i < course.rating
                                                        ? "text-orange-400"
                                                        : "text-gray-300"
                                                }
                                            >
                                                ★
                                            </span>
                                        ))}
                                        <span className='text-gray-400 text-sm ml-1 font-medium'>
                                            ({course.reviews})
                                        </span>
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <span className='text-2xl font-bold text-gray-800'>
                                            ${course.price}
                                        </span>
                                        <button className='w-11 h-11 bg-[#009688] text-white rounded-full flex items-center justify-center hover:bg-[#00796b] shadow-lg shadow-[#009688]/20 transition-all active:scale-95'>
                                            <svg
                                                width='22'
                                                height='22'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeWidth='2.5'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                            >
                                                <line
                                                    x1='7'
                                                    y1='17'
                                                    x2='17'
                                                    y2='7'
                                                ></line>
                                                <polyline points='7 7 17 7 17 17'></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Profile;
