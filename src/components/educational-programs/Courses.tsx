import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { courses } from "../../data/cources";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import StarIcon from "../../assets/icons/StarIcon";
import NoStar from "../../assets/icons/NoStar";

function Courses() {
    return (
        <section className='pt-11 pb-20'>
            <div className='container'>
                <h1 className='font-[var(--second-family)] font-bold text-[28px] md:text-[40px] text-center text-black'>
                    Most Popular Course
                </h1>

                <p className='font-[var(--second-family)] font-medium text-[14px] md:text-[20px] text-center text-[#686868] mt-2 max-w-3xl mx-auto leading-relaxed'>
                    Expert guidance for managing funds in alignment with Islamic
                    principles, helping you make informed, halal investment
                    decisions.
                </p>

                <div className='mt-12 relative'>
                    <button className='prev-btn hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#009688] items-center justify-center text-white'>
                        <ChevronLeft size={20} />
                    </button>

                    <button className='next-btn hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#009688] items-center justify-center text-white'>
                        <ChevronRight size={20} />
                    </button>

                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".next-btn",
                            prevEl: ".prev-btn",
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                        breakpoints={{
                            480: { slidesPerView: 1.2 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                    >
                        {courses.map((item) => (
                            <SwiperSlide key={item.id} className='py-6'>
                                <div className='rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] overflow-hidden'>
                                    <div
                                        className='relative rounded-t-2xl h-40 flex items-center justify-center'
                                        style={{
                                            background: item.color
                                                .replace("bg-[", "")
                                                .replace("]", ""),
                                        }}
                                    >
                                        <span className='absolute top-3 left-3 text-xs bg-white/80 px-2 py-1 rounded'>
                                            {item.category}
                                        </span>

                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='h-20 md:h-24'
                                        />
                                    </div>

                                    <div className='p-4'>
                                        <h3 className='text-sm md:text-base font-medium text-[#1b1d1f]'>
                                            {item.title}
                                        </h3>

                                        <div className='flex items-center gap-1 mt-2 text-sm'>
                                            {Array.from({
                                                length: item.rating,
                                            }).map((_, i) => (
                                                <StarIcon
                                                    key={`full-${i}`}
                                                    className='text-yellow-400'
                                                />
                                            ))}
                                            {Array.from({
                                                length: 5 - item.rating,
                                            }).map((_, i) => (
                                                <NoStar
                                                    key={`empty-${i}`}
                                                    className='text-gray-300'
                                                />
                                            ))}
                                            <span className='text-gray-500 text-xs ml-1'>
                                                ({item.reviews})
                                            </span>
                                        </div>
                                    </div>

                                    <div className='flex justify-between items-center px-4 py-3 border-t border-gray-200'>
                                        <p
                                            style={{
                                                fontFamily: "var(--font3)",
                                                fontWeight: 600,
                                                fontSize: "24px",
                                                lineHeight: "133%",
                                                color: "#1b1d1f",
                                            }}
                                        >
                                            ${item.price}
                                        </p>

                                        <button className='w-9 h-9 rounded-full bg-[#e6f4f1] flex items-center justify-center group transition hover:bg-[#009688]'>
                                            <ArrowUpRight
                                                size={18}
                                                className='text-[#009688] transition group-hover:text-white'
                                            />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='custom-pagination flex justify-center gap-2 mt-6'></div>
                </div>
            </div>
        </section>
    );
}

export default Courses;
