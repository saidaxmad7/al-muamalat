import Service1 from "../../assets/icons/Service1";
import Service2 from "../../assets/icons/Serivce2";
import Service3 from "../../assets/icons/Service3";
import Service4 from "../../assets/icons/Service4";
import Service5 from "../../assets/icons/Service5";
import Service6 from "../../assets/icons/Service6";

const servicesData = [
    {
        title: "Islamic Fund Management",
        desc: "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
        icon: <Service1 />,
        bg: "bg-[#E6EFFF]",
        iconBg: "bg-[#A3C1E9]",
    },
    {
        title: "International Relations",
        desc: "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
        icon: <Service2 />,
        bg: "bg-[#E2F7F0]",
        iconBg: "bg-[#B2E4D5]",
    },
    {
        title: "Education and Training",
        desc: "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
        icon: <Service3 />,
        bg: "bg-[#FCE4F1]",
        iconBg: "bg-[#F4BFDB]",
    },
    {
        title: "For Islamic Banks",
        desc: "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products.",
        icon: <Service4 />,
        bg: "bg-[#EBE4FF]",
        iconBg: "bg-[#C4B7E8]",
    },
    {
        title: "Islamic Capital Market",
        desc: "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
        icon: <Service5 />,
        bg: "bg-[#F0F2F5]",
        iconBg: "bg-[#CDD1D6]",
    },
    {
        title: "Shariah Compliance Audit",
        desc: "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
        icon: <Service6 />,
        bg: "bg-[#FFF4D1]",
        iconBg: "bg-[#FBE09C]",
    },
];

function Services() {
    return (
        <section className='py-10 md:py-17'>
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-16'>
                    {servicesData.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.bg} rounded-[30px] p-6 md:p-8 flex flex-col justify-between h-full`}
                        >
                            <div>
                                <div className='flex items-center gap-4 mb-6'>
                                    <div
                                        className={`${item.iconBg} w-[70px] h-[70px] min-w-[70px] rounded-full flex items-center justify-center overflow-hidden`}
                                    >
                                        <div className=' flex items-center justify-center'>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className='font-[var(--second-family)] font-bold text-[20px] md:text-[24px] leading-tight text-black'>
                                        {item.title}
                                    </h3>
                                </div>
                                <p className='font-[var(--second-family)] text-[14px] md:text-[16px] leading-[1.6] text-[#4A4A4A] mb-8'>
                                    {item.desc}
                                </p>
                            </div>
                            <button className='w-full py-4 bg-[#121C2B] text-white font-bold rounded-[12px] transition-all duration-300 hover:bg-[#1f2d42] hover:shadow-xl active:scale-[0.97]'>
                                Learn more
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
