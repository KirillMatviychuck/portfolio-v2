import { Photo } from "../../common/components/Photo/Photo"
import { AboutMeDescription } from "./AboutMeDescription/AboutMeDescription"

export const AboutMe = () => {
    return (
        <div className="min-h-[91.4vh] w-[70%] bg-gray-800 flex justify-between items-center self-center 2sm:flex-col 2sm:h-screen 2sm:justify-center">
            <Photo animation={false} />
            <AboutMeDescription />
        </div>
    )
}