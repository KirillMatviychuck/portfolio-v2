import { FC } from "react"
import { NavLink } from "react-router-dom"

export const Skill: FC<Props> = ({ svgPath, title, description }) => {
    return (
        <div className="h-[425px] w-[325px] flex flex-col justify-between items-center bg-gray-700 p-[20px] rounded-[20px] 2sm:mt-4 2sm:w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" style={{ fill: "rgb(30, 229, 255)" }} viewBox="0 0 24 24" ><path d={svgPath}></path></svg>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="flex flex-col text-center">{description}</p>
            <div className="relative">
                <NavLink to="/projects" className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white relative z-10">See projects</NavLink>
                <NavLink to="/projects" className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white absolute bottom-0 left-0 blur z-0">See projects</NavLink>
            </div>
        </div>
    )
}

type Props = {
    title: string
    svgPath: string
    description: string
}