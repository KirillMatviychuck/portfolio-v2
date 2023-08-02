import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <ul className="flex justify-around items-center w-[30%] mr-[280px] font-medium 2sm:text-xs 2sm:w-full 2sm:mr-0">
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}>Home</NavLink></li>
            <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}>About Me</NavLink></li>
            <li><NavLink to={'/skills'} className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}>Skills</NavLink></li>
            <li><NavLink to={'/projects'} className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}>My Projects</NavLink></li>
            <li><NavLink to={'/contacts'} className={({ isActive }) => isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}>Contacts</NavLink></li>
        </ul>
    )
}       