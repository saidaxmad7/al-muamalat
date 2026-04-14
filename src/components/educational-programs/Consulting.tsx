import Britian from "../../assets/icons/Britian";
import { ChevronDown } from "lucide-react";

function Consulting() {
    return (
        <section className='py-17'>
            <div className='container'>
                <div className='flex flex-col md:flex-row rounded-2xl overflow-hidden'>

                    <div className='bg-[#fae9d3] p-8 md:p-11 md:w-[65%]'>
                        <h2 className='font-bold text-[26px] md:text-[32px] text-[#d28527] [font-family:var(--third-family)]'>
                            Workshops and Spiritual Development
                        </h2>
                        <p className='mt-5 font-medium text-[18px] md:text-[22px] leading-[145%] text-[#d28527] [font-family:var(--third-family)]'>
                            Participate in our weekly workshops focused on
                            Islamic studies and spiritual growth. These sessions
                            are designed to help you strengthen your connection
                            with faith and acquire essential skills for daily
                            life
                        </p>
                    </div>

                    <div className='bg-[#f9f7f3] p-8 md:p-11 md:w-[35%]'>
                        <h3 className='font-bold text-[24px] md:text-[30px] text-[#152032] [font-family:var(--third-family)]'>
                            Free consultation
                        </h3>
                        <p className='mt-2 font-medium text-[14px] md:text-[16px] leading-[125%] text-[#152032] [font-family:var(--third-family)]'>
                            Leave your phone number, and we will reach out to
                            provide you with complete information about our
                            courses.
                        </p>

                        <div className='mt-7'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='w-full border border-[rgba(104,104,104,0.5)] rounded-md px-4 py-2 outline-none mb-5 bg-white text-sm md:text-base'
                            />

                            <div className='flex items-center border border-[rgba(104,104,104,0.5)] rounded-md px-3 h-10 md:h-10.5 gap-2 bg-white'>
                                <Britian />

                                <ChevronDown
                                    size={14}
                                    className='text-gray-500'
                                />

                                <span className='text-sm text-gray-500 border-r border-[rgba(104,104,104,0.3)] pr-2.5 mr-0.5'>
                                    +44
                                </span>

                                <input
                                    type='tel'
                                    placeholder='Phone number'
                                    className='flex-1 border-none outline-none bg-transparent text-sm'
                                />
                            </div>

                            <label className='flex items-start gap-2 mt-7 cursor-pointer'>
                                <input
                                    type='checkbox'
                                    className='w-5 h-5 md:w-8 md:h-8 mr-2 mt-0.5 cursor-pointer'
                                />
                                <span className='text-sm md:text-base text-[#152032]'>
                                    I agree to the use of my personal
                                    information for consultation purposes.
                                </span>
                            </label>

                            <button className='w-full bg-[#009688] hover:bg-teal-700 transition duration-300 text-white mt-5 py-2 rounded-md text-sm md:text-base'>
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Consulting;