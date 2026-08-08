import currencyConv from "../../assets/images/my-projects/currencyConv.jpg"
import movieLand from "../../assets/images/my-projects/movieLand.jpg"
import jwtLogo from "../../assets/images/my-projects/jwt-logo.png"
import { ProjectItem } from "../../common/components/ProjectItem/ProjectItem"
import { FeaturedProject } from "./FeaturedProject/FeaturedProject"
const Zoom = require('react-reveal/Zoom')
const Flip = require('react-reveal/Flip')

export const MyProjects = () => {

    const mainProject = {
        title: "Movie Land",
        picture: movieLand,
        description:
            `Production-quality movie discovery SPA built with React, TypeScript, and Redux Toolkit.
            Features TMDB API integration, search, pagination, animated transitions, and scalable Redux 
            architecture. Tech: React, TypeScript, Redux Toolkit, React Router, Material UI, SCSS, Axios,
             Framer Motion.`,
        projectLink: "https://kirillmatviychuck.github.io/movie-land/",
    };
    const additionalProjects = [
        {
            title: "JWT Authentication System",
            picture: jwtLogo,
            description:
                "Full-stack JWT authentication system",
            projectLink: "https://kirillmatviychuck.github.io/password-generator/",
        },
        {
            title: "Currency Convertor",
            picture: currencyConv,
            description:
                "Currency converter using external API integration to display current exchange rates.",
            projectLink: "https://kirillmatviychuck.github.io/currency-convertor/",
        },
    ];

    return (
        <div className="h-[93vh] w-[50%] bg-gray-800 flex flex-col items-center self-center text-white 2sm:h-max">
            <Flip top>
                <h1 className="text-5xl font-semibold mt-12 mb-12 2sm:text-center">
                    Latest <span className="text-cyan-400">
                        Projects
                    </span>
                </h1>
            </Flip>
            <div className="w-full">
                <Zoom>
                    <FeaturedProject
                        title={mainProject.title}
                        picture={mainProject.picture}
                        description={mainProject.description}
                        projectLink={mainProject.projectLink}
                    />
                </Zoom>
                <div className="flex justify-between flex-wrap gap-5">
                    {
                        additionalProjects.map((project, index) => (
                            <ProjectItem key={index}
                                picture={project.picture}
                                title={project.title}
                                projectLink={project.projectLink}
                                projectDescription={project.description}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    );
};