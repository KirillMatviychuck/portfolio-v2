import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <ul className="flex justify-between items-center w-3/4 font-medium">
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-sky-400' : 'text-white hover:text-sky-400'}>Home</NavLink></li>
            <li><NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-sky-400' : 'text-white hover:text-sky-400'}>About Me</NavLink></li>
            <li><NavLink to={'/resume'} className={({ isActive }) => isActive ? 'text-sky-400' : 'text-white hover:text-sky-400'}>Resume</NavLink></li>
            <li><NavLink to={'/projects'} className={({ isActive }) => isActive ? 'text-sky-400' : 'text-white hover:text-sky-400'}>My Projects</NavLink></li>
            <li><NavLink to={'/contacts'} className={({ isActive }) => isActive ? 'text-sky-400' : 'text-white hover:text-sky-400'}>Contacts</NavLink></li>
        </ul>
    )
}