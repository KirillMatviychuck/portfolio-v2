import { Photo } from "../../common/components/Photo/Photo"
import { AboutMeDescription } from "./AboutMeDescription/AboutMeDescription"

export const AboutMe = () => {
    return (
        <div className="h-[91.4vh] w-[70%] bg-gray-800 flex justify-between items-center self-center">
            <Photo animation={false} />
            <AboutMeDescription />
        </div>
    )
}