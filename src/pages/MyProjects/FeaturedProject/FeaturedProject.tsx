import { FC } from "react";

export const FeaturedProject: FC<Props> = ({
    title,
    picture,
    description,
    projectLink
}) => {
    return (
        <div className="w-full h-[420px] rounded-[25px] overflow-hidden relative mb-10 2sm:h-[350px]">
            <img src={picture} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-10 bg-gradient-to-r from-cyan-600 via-cyan-500/70 to-transparent 2sm:p-5">
                <h2 className="text-5xl font-bold mt-3 2sm:text-3xl">
                    {title}
                </h2>
                <p className="max-w-[500px] mt-5 text-lg text-center font-medium">
                    {description}
                </p>
                <a href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-[170px] h-[45px] flex justify-center items-center bg-white rounded-full text-gray-800 font-bold hover:bg-gray-800 hover:text-white transition">
                    View Project
                </a>
            </div>
        </div>
    );
};


type Props = {
    title: string;
    picture: string;
    description: string;
    projectLink: string;
};