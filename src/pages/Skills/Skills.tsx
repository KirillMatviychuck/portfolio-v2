import { Skill } from "../../common/components/Skill/Skill"

const skillsStore = [
    { title: "Development", description: "Creating single page applications using the React library, and using Redux, Redux-Toolkit as a state manager. Using GitHub for version control", svgPath: "m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" },
    { title: "Foundation", description: "I have excellent knowledge of Javascript. Also, most of my SPA are written in Typescript. I have excellent knowledge in HTML, CSS, SCSS.", svgPath: "M19 2.01H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.998 5 19.815 5 19.01c0-.101.009-.191.024-.273.112-.575.583-.717.987-.727H20c.018 0 .031-.009.049-.01H21V4.01c0-1.103-.897-2-2-2zm0 14H5v-11c0-.806.55-.988 1-1h7v7l2-1 2 1v-7h2v12z" },
    { title: "Design", description: "Writing SPA using the Material UI. I also have experience with the Tailwind framework. With the help of which my latest projects were written.", svgPath: "M21.084 2.914c-1.178-1.179-3.234-1.179-4.412 0l-8.379 8.379a.999.999 0 0 0 0 1.414l3 3a.997.997 0 0 0 1.414 0l8.379-8.379a3.123 3.123 0 0 0-.002-4.414zm-1.412 3L12 13.586 10.414 12l7.672-7.672a1.146 1.146 0 0 1 1.586.002 1.123 1.123 0 0 1 0 1.584zM8 15c-1.265-.634-3.5 0-3.5 2 0 1.197.5 2-1.5 3 0 0 3.25 2.25 5.5 0 1.274-1.274 1.494-4-.5-5z" },
    { title: "Testing", description: "Testing using Jest, building UI components using a Storybook, using Postman to check the correctness of writing CRUD operations.", svgPath: "M6.787 7h10.426c-.108-.158-.201-.331-.318-.481l2.813-2.812-1.414-1.414-2.846 2.846a6.575 6.575 0 0 0-.723-.454 5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293 4.293 3.707l2.813 2.812c-.118.151-.21.323-.319.481zM5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5 0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118.188.555.421 1.093.695 1.6.044.081.095.155.141.234l-2.33 2.33 1.414 1.414 2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58.204.052.411.085.618.118V16h2v5.914a6.23 6.23 0 0 0 .618-.118 6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904.258-.218.5-.462.734-.716l2.111 2.111 1.414-1.414-2.33-2.33c.047-.08.098-.155.142-.236.273-.505.507-1.043.694-1.599.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511 0-.503-.042-1.005-.106-1.5H22V9H5.756z" },
]

export const Skills = () => {
    return (
        <div className="h-[91.4vh] w-[70%] bg-gray-800 flex flex-col items-center self-center text-white">
            <div className="h-[80%] w-full flex flex-col items-center justify-around">
                <h1 className="text-5xl font-semibold">My <span className="text-cyan-400">Skills</span></h1>
                <div className="w-full flex justify-between justify-self-">
                    {skillsStore.map(skill => <Skill description={skill.description} title={skill.title} svgPath={skill.svgPath} />)}
                </div>
            </div>
        </div>
    )
}