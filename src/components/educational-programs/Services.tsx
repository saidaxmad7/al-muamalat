function Services() {
    const services = Array(6).fill({
        title: "Islamic Fund Management",
        desc: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
        price: "$ 250",
        oldPrice: "$ 300",
        students: "+ 40 students",
        date: "Start date: 21 December 2024",
        image: "/edc-service.png",
    });

    return (
        <section className='py-17'>
            <div className='container'>
                <h1 className='font-[var(--second-family)] font-bold text-[32px] md:text-[40px] text-center text-black'>
                    Our services
                </h1>
                <p className='font-[var(--second-family)] font-medium text-[16px] md:text-[20px] text-center text-[#686868] mt-2 max-w-3xl mx-auto leading-relaxed'>
                    Expert guidance for managing funds in alignment with Islamic
                    principles, helping you make informed, halal investment
                    decisions.
                </p>
                <div className='grid md:grid-cols-3 gap-6 mt-15'>
                    {services.map((item, i) => (
                        <div key={i} className='bg-white rounded-xl shadow-md'>
                            <div className='relative'>
                                <div className=''>
                                    <img src={item.image} alt={item.title} />
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
