function Services() {
    const services = Array(6).fill({
        title: "Islamic Fund Management",
        desc: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
        price: "$ 250",
        oldPrice: "$ 300",
        students: "+ 40 students",
        studentAvatar: "/edc-service-avatar.png",
        date: "Start date: 21 December 2024",
        image: "/edc-service.png",
    });

    return (
        <section className='py-17'>
            <div className='container'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-[var(--second-family)] font-bold text-[32px] md:text-[40px] text-center text-black'>
                        Our services
                    </h1>
                    <p className='font-[var(--second-family)] font-medium text-[16px] md:text-[20px]  text-[#686868] max-w-143.5 text-center'>
                        Expert guidance for managing funds in alignment with
                        Islamic principles, helping you make informed, halal
                        investment decisions.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15'>
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className='bg-white rounded-xl shadow-[5px_5px_16px_0_rgba(0,0,0,0.1),20px_22px_29px_0_rgba(0,0,0,0.09),44px_49px_40px_0_rgba(0,0,0,0.05),79px_87px_47px_0_rgba(0,0,0,0.01),123px_136px_51px_0_rgba(0,0,0,0)] flex flex-col h-full'
                        >
                            <div className='relative shrink-0'>
                                <div className='w-full'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-full h-full object-cover rounded-t-xl'
                                    />
                                </div>
                                <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#d2e6e4] flex items-center gap-2 px-3 py-1 rounded-2xl'>
                                    <img
                                        src={item.studentAvatar}
                                        alt={item.students}
                                    />
                                    <p className='text-[14px] md:text-[16px] font-semibold text-black'>
                                        {item.students}
                                    </p>
                                </div>
                            </div>

                            <div className='pt-10 px-4 md:px-7 pb-6 flex flex-col flex-grow'>
                                <p className='font-normal text-[12px] text-[#686868]'>
                                    {item.date}
                                </p>
                                <h3 className='font-bold text-[20px] md:text-[24px] text-[#009688] mt-2 leading-tight'>
                                    {item.title}
                                </h3>
                                <p className='font-normal text-[15px] md:text-[17px] text-[#686868] mt-2 flex-grow'>
                                    {item.desc}
                                </p>

                                <div className='flex flex-wrap items-center justify-between gap-3 mt-5'>
                                    <div className='flex gap-x-2 items-baseline'>
                                        <span className='font-bold text-[24px] md:text-[30px] text-[#fd661f]'>
                                            {item.price}
                                        </span>
                                        <span className='text-[18px] md:text-[22px] line-through text-[#686868]'>
                                            {item.oldPrice}
                                        </span>
                                    </div>
                                    <button className='w-full sm:w-auto py-2 px-6 rounded-[10px] bg-[#009688] font-semibold text-[15px] md:text-[16px] text-white hover:bg-[#00796b] transition duration-300'>
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
