import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className='bg-[#009688] text-white py-10 px-4'>
            <div className='container flex flex-col items-center'>
                <div className='mb-6'>
                    <div className='flex items-center gap-3'>
                        <img src="/footer-logo.png" alt="dior studio logo" />
                    </div>
                </div>

                <ul className='flex flex-wrap justify-center gap-6 md:gap-10 mb-8 text-sm md:text-base font-medium'>
                    <li>
                        <a href='#' className='hover:opacity-80 transition-all'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#' className='hover:opacity-80 transition-all'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#' className='hover:opacity-80 transition-all'>
                            Service
                        </a>
                    </li>
                    <li>
                        <a href='#' className='hover:opacity-80 transition-all'>
                            Contact Us
                        </a>
                    </li>
                </ul>

                <div className='flex gap-6 mb-8'>
                    <a
                        href='#'
                        className='hover:scale-110 transition-transform'
                    >
                        <FaYoutube size={22} />
                    </a>
                    <a
                        href='#'
                        className='hover:scale-110 transition-transform'
                    >
                        <FaFacebook size={22} />
                    </a>
                    <a
                        href='#'
                        className='hover:scale-110 transition-transform'
                    >
                        <FaTwitter size={22} />
                    </a>
                    <a
                        href='#'
                        className='hover:scale-110 transition-transform'
                    >
                        <FaInstagram size={22} />
                    </a>
                </div>

                <div className='w-full max-w-5xl border-t border-white/30 mb-6'></div>

                <p className='text-sm opacity-90 text-center'>
                    Copyright Satyam Studio
                </p>
            </div>
        </footer>
    );
}

export default Footer;
