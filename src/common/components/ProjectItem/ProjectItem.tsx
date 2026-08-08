import { FC } from "react"

export const ProjectItem: FC<Props> = ({ title, picture, projectDescription, projectLink }) => {
    return (
        <div className="h-[270px] w-[400px] rounded-[25px] my-4 smm:w-[340px] smm:h-[200px]">
            <div className="relative flex h-full rounded-[25px] overflow-hidden transition-all duration-200 ease-linear hover:scale-110">
                <img src={picture} alt="project" className="relative w-full object-cover" />
                <div className="absolute flex flex-col items-center justify-around bottom-0 left-0 w-full h-full p-4 bg-gradient-to-b from-cyan-500 to-transparent">
                    <h2 className="text-3xl text-center font-semibold smm:text-2xl smm:jusify-center smm:items-center">{title}</h2>
                    <p className="text-center font-medium">{projectDescription}</p>
                    <a href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-[170px] h-[45px] flex justify-center items-center bg-white rounded-full text-gray-800 font-bold hover:bg-gray-800 hover:text-white transition">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    )
}

type Props = {
    title: string
    picture: string
    projectLink: string
    projectDescription: string
}