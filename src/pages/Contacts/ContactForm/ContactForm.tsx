export const ContactForm = () => {
    return (
        <section className="w-full h-full flex justify-center items-center text-white px-4">
            <div className="w-1/2 2sm:w-full bg-gray-700 rounded-xl p-8 shadow-lg">
                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-3 2sm:text-3xl flex justify-center items-center">
                        <span className="pr-2">Contact</span> <span className="text-cyan-400 pl-2">Me</span>
                    </h1>

                    <p className="text-lg text-gray-300">
                        Frontend Developer specializing in React, TypeScript and modern web applications.
                        Open to remote opportunities.
                    </p>
                </div>
                <div className="flex flex-col gap-5">

                    <div>
                        <h3 className="text-cyan-400 font-semibold text-sm uppercase">
                            Name
                        </h3>
                        <p className="text-xl">
                            Kirill Matviichuk
                        </p>
                    </div>
                    <div>
                        <h3 className="text-cyan-400 font-semibold text-sm uppercase">
                            Location
                        </h3>
                        <p className="text-xl">
                            Kyiv, Ukraine
                        </p>
                    </div>
                    <div>
                        <h3 className="text-cyan-400 font-semibold text-sm uppercase">
                            Email
                        </h3>

                        <a
                            href="mailto:kirill.mtvk@gmail.com"
                            className="text-xl hover:text-cyan-400 transition"
                        >
                            kirill.mtvk@gmail.com
                        </a>
                    </div>
                    <div>
                        <h3 className="text-cyan-400 font-semibold text-sm uppercase">
                            Phone
                        </h3>

                        <a
                            href="tel:+380660378177"
                            className="text-xl hover:text-cyan-400 transition"
                        >
                            +380 66 037 81 77
                        </a>
                    </div>
                    <div>
                        <h3 className="text-cyan-400 font-semibold text-sm uppercase">
                            Links
                        </h3>

                        <div className="flex flex-col">
                            <a
                                href="https://github.com/KirillMatviychuck"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-cyan-400 transition"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kirill-matviichuk/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl hover:text-cyan-400 transition"
                            >
                                LinkedIn
                            </a>

                        </div>
                    </div>
                </div>
                <div className="flex gap-4 mt-8 justify-center items-center">
                    <a
                        href="https://drive.google.com/file/d/1FG4mqkIRLcUJWodFamRMdKHisBZyZvlo/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                        flex justify-center items-center 
                        w-[170px] h-[45px]
                        bg-cyan-400
                        rounded-full
                        text-gray-800
                        font-bold
                        tracking-wide
                        hover:text-white
                        transition"
                    >
                        Download CV
                    </a>
                    <a
                        href="https://t.me/kirillmt"
                        className="
                        flex justify-center items-center 
                        w-[170px] h-[45px]
                        border border-cyan-400
                        rounded-full
                        text-cyan-400
                        font-bold
                        tracking-wide
                        hover:bg-cyan-400
                        hover:text-gray-800
                        transition"
                    >
                        Contact me
                    </a>
                </div>
            </div>
        </section>
    );
};