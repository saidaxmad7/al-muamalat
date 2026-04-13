import { ChevronDown } from "lucide-react";

function Info() {
    return (
        <section className='py-12 md:py-16'>
            <div className='container'>
                <h2 className='text-center text-[24px] md:text-[32px] font-semibold text-[#1f2937] mb-10'>
                    Brief information about the course
                </h2>

                <div className='grid md:grid-cols-2 gap-10 mx-auto'>
                    <div>
                        <h3 className='flex items-center gap-2 font-[var(--second-family)] font-medium text-[18px] md:text-[28px] text-[#009688] mb-3'>
                            Videodarslar
                            <ChevronDown size={22} />
                        </h3>
                        <p className='font-[var(--second-family)] font-normal text-[16px] md:text-[20px] text-[#152032] leading-relaxed'>
                            Lessons are posted on the platform in the form of
                            videos, which can be viewed anytime and anywhere.
                            Video lessons are updated.
                        </p>
                    </div>

                    <div>
                        <h3 className='flex items-center gap-2 font-[var(--second-family)] font-medium text-[18px] md:text-[28px] text-[#009688] mb-3'>
                            Tasks
                            <ChevronDown size={22} />
                        </h3>
                        <p className='font-[var(--second-family)] font-normal text-[16px] md:text-[20px] text-[#152032] leading-relaxed'>
                            Test tasks are given at the end of the module. Only
                            students who successfully pass the test will be able
                            to access the lessons in the next module.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;
