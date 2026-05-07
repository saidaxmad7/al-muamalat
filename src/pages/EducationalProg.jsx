import Consulting from "../components/educational-programs/Consulting";
import Courses from "../components/educational-programs/Courses";
import Hero from "../components/educational-programs/Hero";
import Info from "../components/educational-programs/Info";
import Payment from "../components/educational-programs/Payment";
import Services from "../components/educational-programs/Services";

function EducationalProg() {
    return (
        <section className='py-17'>
            <>
                <Hero />
                <Info />
                <Courses />
                <Payment />
                <Services />
                <Consulting />
            </>
        </section>
    );
}

export default EducationalProg;
