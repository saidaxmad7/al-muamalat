function Banner() {
    return (
        <section className='bg-[#009688] pt-10 pb-2 mb-12'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='w-full lg:w-1/2'>
                        <h3 className='banner-title'>
                            Seeking Knowledge is an Obligation in Islam
                        </h3>

                        <h1 className='font-[var(--third-family)] font-bold text-[32px] sm:text-[40px] lg:text-[52px] mt-6 lg:mt-10 leading-[121%] text-white'>
                            Enhance Your Understanding of Islamic Ethics with
                            Al-Muamalat
                        </h1>

                        <div className='relative   md:flex md:flex-row my-6 lg:mt-10'>
                            <button className='font-[var(--third-family)] font-medium text-[14px] sm:text-[16px] tracking-[0.02em] uppercase text-white rounded-[10px] px-5 sm:px-7.5 py-3 sm:py-4 bg-[#fd661f] hover:bg-[#e55a17] transition-all duration-300 mb-3'>
                                Students’ opnion
                            </button>

                            <img
                                src='/banner-button.png'
                                alt='reviews'
                                className='absolute left-0 sm:left-48'
                            />
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center lg:justify-end'>
                        <div className='absolute top-0 left-1/2 -translate-x-1/2 lg:left-10 lg:translate-x-0'>
                            <div className='flex items-center gap-3 backdrop-blur-[20px] bg-white/80 rounded-[20px] px-4 sm:px-6 py-3 sm:py-4 w-fit'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#23BDEE] flex items-center justify-center'>
                                    <img
                                        src='/banner-icon.png'
                                        alt='schedul icon'
                                    />
                                </div>

                                <div className='flex flex-col'>
                                    <h3 className='font-[var(--font10)] font-bold text-[20px] sm:text-[24px] leading-tight tracking-[0.02em] text-[#595959]'>
                                        250k
                                    </h3>
                                    <p className='font-[var(--third-family)] font-semibold text-[12px] sm:text-[14px] leading-tight tracking-[0.02em] text-[#545567]'>
                                        Assisted Student
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <img
                                src='/banner-person.png'
                                alt='person image'
                                className='w-70 sm:w-87.5 lg:w-auto '
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
