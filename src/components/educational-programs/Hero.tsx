import CheckIcon from "../../assets/icons/CheckIcon";

function Hero() {
    return (
        <section className='py-10 md:py-16'>
            <div className='container mx-auto px-4'>
                <h1 className='font-[var(--second-family)] font-bold text-[32px] md:text-[40px] text-center text-black'>
                    International educational programs
                </h1>
                <p className='font-[var(--second-family)] font-medium text-[16px] md:text-[20px] text-center text-[#686868] mt-2 max-w-3xl mx-auto leading-relaxed'>
                    Al Muamalat Education's international study programs offer
                    an in-depth learning experience at leading Islamic financial
                    institutions around the world.
                </p>

                <div className='mt-12 grid md:grid-cols-2 gap-6'>
                    <div className='bg-[#f3f8ff] rounded-xl p-6 md:p-8'>
                        <h3 className='text-[20px] md:text-[22px] font-semibold text-black text-center mb-6'>
                            What you’ll learn
                        </h3>

                        <ul className='space-y-4 text-[#333] text-[14px] md:text-[15px]'>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <CheckIcon />
                                </span>
                                <p>
                                    Gain a comprehensive understanding of
                                    Islamic finance principles and ethics.
                                </p>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <CheckIcon />
                                </span>
                                <p>
                                    Build a portfolio with 10+ real-world
                                    projects in Islamic financial services.
                                </p>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <CheckIcon />
                                </span>
                                <p>
                                    Learn to develop and manage Sharia-compliant
                                    financial products.
                                </p>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <CheckIcon />
                                </span>
                                <p>
                                    Master key concepts in Islamic banking,
                                    investment, and wealth management.
                                </p>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <CheckIcon />
                                </span>
                                <p>
                                    Understand the fundamentals of risk
                                    management in Islamic finance.
                                </p>
                            </li>
                            <li className='flex items-center gap-3'>
                                <span>
                                    <CheckIcon />
                                </span>
                                <p>
                                    Develop skills to work as an Islamic finance
                                    consultant.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className='bg-[#f3f8ff] rounded-xl p-6 md:p-8'>
                        <h3 className='text-[20px] md:text-[22px] font-semibold text-black text-center mb-6'>
                            Why should you study at "AL-MUAMALAT"?
                        </h3>

                        <ul className='space-y-4 text-[#333] text-[14px] md:text-[15px] list-disc pl-5'>
                            <li>Lifetime access</li>
                            <li>Video lessons</li>
                            <li>Tests</li>
                            <li>Projects</li>
                            <li>Downloadable resources</li>
                            <li>Access via mobile device</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
