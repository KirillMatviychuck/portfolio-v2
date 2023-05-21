import { ProjectItem } from "../../common/components/ProjectItem/ProjectItem"
import socialNet from "../../assets/images/my-projects/socialnet.jpg"
import movieLand from "../../assets/images/my-projects/movieLand.jpg"
import passGen from "../../assets/images/my-projects/passgenerator.png"
import currencyConv from "../../assets/images/my-projects/currencyConv.jpg"
import todolist from "../../assets/images/my-projects/todolist.jpg"
import taskTable from "../../assets/images/my-projects/taskTable.jpg"


const projectsStore = [
    { title: "Social Network", picture: socialNet, description: "Social network app with using react hooks, routing, working with REST API, using unit tests for code workability", porjectLink: "https://kirillmatviychuck.github.io/login" },
    { title: "Movie Land", picture: movieLand, description: "My main project was created using Typescript, React, Redux-toolkit as core technologies.", porjectLink: "https://kirillmatviychuck.github.io/movie-land/" },
    { title: "Password Generator", picture: passGen, description: "Password generator with customizable values. Using TypeScript for best code control during development", porjectLink: "https://kirillmatviychuck.github.io/password-generator/" },
    { title: "To Do List", picture: todolist, description: "Todolist app created with react hooks. routing and redirects, material UI, REST API request/response flow, unit-tests.", porjectLink: "https://kirillmatviychuck.github.io/login" },
    { title: "Currency Convertor", picture: currencyConv, description: "Created using the open currency API, in which you can see the real exchange rate at the moment.", porjectLink: "https://kirillmatviychuck.github.io/currency-convertor/" },
    { title: "Task-table", picture: taskTable, description: "Editable table of tasks in which you can add, delete a task, assign an executor, and other functions", porjectLink: "https://kirillmatviychuck.github.io/task-table/" },
]

export const MyProjects = () => {
    return (
        <div className="h-[91.4vh] w-[70%] bg-gray-800 flex flex-col items-center self-center text-white">
            <div className="h-[90%] w-full flex flex-col items-center">
                <h1 className="text-5xl font-semibold mt-12 mb-20">Latest <span className="text-cyan-400">Projects</span></h1>
                <div className="flex flex-wrap justify-between items-center">
                    {projectsStore.map((project, index) => (
                        <ProjectItem key={index}
                            picture={project.picture}
                            title={project.title}
                            projectLink={project.porjectLink}
                            projectDescription={project.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}