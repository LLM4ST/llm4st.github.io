import {HERO_CONTENT, HERO_TITLE} from "@/constants";

const Hero = () => {
    return (
        <section className="relative h-[80vh] bg-[url('/vancouver.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"/>
            <div
                className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-white text-center">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">{HERO_TITLE}</h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-8">
                    {HERO_CONTENT}
                </p>
            </div>
        </section>
    );
};

export default Hero;
