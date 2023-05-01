import { FC, ReactNode } from "react"

export const Socials: FC<Props> = ({ children, socialLink }) => {
    return (
        <a href={socialLink} className="relative flex justify-center items-center w-12 h-12 bg-cyan-400 rounded-full text-lg text-white mr-4 z-10 after:z-[-1] after:content-[''] after:absolute after:w-full after:h-full after:bg-gray-700 after:rounded-full after:scale-90 after:ease-linear after:duration-500 after:hover:scale-0">
            {children}
        </a>
    )
}

type Props = {
    children: ReactNode;
    socialLink: string
}