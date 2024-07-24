import { FC } from "react"

export const ProjectItem: FC<Props> = ({ title, picture, projectDescription, projectLink }) => {
    return (
        <div className="h-[270px] w-[400px] rounded-[25px] my-4 smm:w-[340px] smm:h-[200px]">
            <div className="relative flex h-full rounded-[25px] overflow-hidden transition-all duration-2~00 ease-linear hover:scale-110">
                <img src={picture} alt="project" className="relative w-full object-cover" />
                <div className="absolute flex flex-col items-center justify-around bottom-0 left-0 w-full h-full p-4 bg-gradient-to-b from-cyan-500 to-transparent">
                    <h2 className="text-3xl font-semibold smm:text-2xl smm:jusify-center smm:items-center">{title}</h2>
                    <p className="text-center font-medium">{projectDescription}</p>
                    <a href={projectLink} className="h-12 w-12 flex justify-center items-center bg-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgb(88, 88, 88)" }}>
                            <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                        </svg>
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