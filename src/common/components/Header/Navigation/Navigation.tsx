import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <ul className="flex justify-between items-center w-3/4 h-12">
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About Me</NavLink></li>
            <li><NavLink to={'/resume'}>Resume</NavLink></li>
            <li><NavLink to={'/projects'}>My Projects</NavLink></li>
            <li><NavLink to={'/contacts'}>Contacts</NavLink></li>
        </ul>
    )
}