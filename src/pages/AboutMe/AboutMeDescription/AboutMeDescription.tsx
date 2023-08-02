import { NavLink } from "react-router-dom"

const Fade = require('react-reveal/Fade')

export const AboutMeDescription = () => {
    return (
        <Fade>
            <div className="w-1/2 flex flex-col h-[40%] justify-between text-white 2sm:w-[90%] 2sm:h-max 2sm:items-center 2sm:mt-12">
                <h1 className="text-5xl font-bold 2sm:text-3xl 2sm:mb-2">About <span className="text-cyan-400">Me</span></h1>
                <h2 className="text-3xl font-bold 2sm:text-xl 2sm:mb-2">Frontend Developer!</h2>
                <p className="mb-3 text-lg text-justify 2sm:text-base">
                    I'm a Kirill, web-developer based on Kyiv. I have experience in creating SPA using
                    <label>&nbsp;<span className="text-cyan-400 font-semibold">
                        React, Redux, ReduxToolkit, TypeScript, Material UI
                    </span>&nbsp;</label>
                    and other technologies. Now I am improving my skills in
                    this direction and extending them with new technologies.<br />
                    My next goal is to learn Node.js, to become a Full-Stack Developer.
                </p>
                <div className="relative 2sm:mt-6">
                    <NavLink to="/contacts" className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white relative z-10">Write me</NavLink>
                    <NavLink to="/contacts" className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white absolute bottom-0 left-0 blur z-0">Write me</NavLink>
                </div>
            </div>
        </Fade>
    )
}