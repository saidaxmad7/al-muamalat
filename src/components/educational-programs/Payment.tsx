import WhiteCheck from "../../assets/icons/WhiteCheck";

function Payment() {
    return (
        <section className='py-12 md:py-20'>
            <div className='container'>
                <div className='rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] grid md:grid-cols-2'>
                    <div className='bg-[#0f8f7f] text-white p-6 md:p-10'>
                        <h2 className='text-xl md:text-2xl font-semibold mb-6'>
                            Our Services
                        </h2>

                        <div className='space-y-6'>
                            <div className='flex gap-3 items-start'>
                                <div className='shrink-0 mt-1'>
                                    <WhiteCheck />
                                </div>
                                <div>
                                    <h4 className='font-[var(--font5)] font-semibold text-[22px] tracking-[-0.02em] text-white'>
                                        Space for creative ideas
                                    </h4>
                                    <p className='font-[var(--font5)] font-medium text-[16px] tracking-[-0.02em] text-white mt-2'>
                                        Cyber Square nourishes young aspiring
                                        minds to get a clear vision of their
                                        ideas. We guide them in analyzing and
                                        building their vision and ideas into
                                        reality.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3 items-start'>
                                <div className='shrink-0 mt-1'>
                                    <WhiteCheck />
                                </div>
                                <div>
                                    <h4 className='font-[var(--font5)] font-semibold text-[22px] tracking-[-0.02em] text-white'>
                                        Engaging and fun curriculum
                                    </h4>
                                    <p className='font-[var(--font5)] font-medium text-[16px] tracking-[-0.02em] text-white mt-2'>
                                        Our goal is to create an engaging system
                                        that provides exciting activities so
                                        children can understand the programming
                                        concepts thoroughly so that they can
                                        perform them on their own. With Cyber
                                        Square kids have fun while they learn
                                        without frustrations.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-3 items-start'>
                                <div className='shrink-0 mt-1'>
                                    <WhiteCheck />
                                </div>
                                <div>
                                    <h4 className='font-[var(--font5)] font-semibold text-[22px] tracking-[-0.02em] text-white'>
                                        Professional teaching methods
                                    </h4>
                                    <p className='font-[var(--font5)] font-medium text-[16px] tracking-[-0.02em] text-white mt-2'>
                                        We professionals at Cyber Square, have
                                        developed an in-depth understanding in
                                        how to teach kids and how to code.
                                        Moreover, we believe in exposing kids to
                                        real programming languages and
                                        professional tools.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white p-6 md:p-10'>
                        <h2 className='text-xl md:text-2xl font-semibold text-black mb-6'>
                            Payment
                        </h2>

                        <ul className='space-y-3 font-[var(--font5)] font-normal text-[18px] tracking-[-0.02em] text-black'>
                            <li className='flex gap-2'>
                                <span className='w-2 h-2 mt-2 bg-[#009688] rounded-full'></span>
                                Space for creative ideas
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-2 h-2 mt-2 bg-[#009688] rounded-full'></span>
                                Engaging and fun curriculum
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-2 h-2 mt-2 bg-[#009688] rounded-full'></span>
                                Professional teaching methods
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-2 h-2 mt-2 bg-[#009688] rounded-full'></span>
                                Learn from AI & Data Science experts
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-2 h-2 mt-2 bg-[#009688] rounded-full'></span>
                                Courses by IIT, NIT, and IIM alumni
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-2 h-2 mt-2 bg-[#009688] rounded-full'></span>
                                UK certification upon completion
                            </li>
                            <li className='flex gap-2'>
                                <span className='w-2 h-2 mt-2 bg-[#009688] rounded-full'></span>
                                Personalized one-to-one training
                            </li>
                        </ul>

                        <button className='mt-6 bg-[#009688] hover:bg-[#00796b] text-white px-6 py-2 rounded-md transition'>
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Payment;
