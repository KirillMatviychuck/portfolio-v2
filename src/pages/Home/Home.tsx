import { Description } from "./Description/Description"
import { Photo } from "../../common/components/Photo/Photo"

export const Home = () => {
    return (
        <div className="h-[91.3vh] w-[70%] bg-gray-800 flex flex-row justify-between items-center self-center 2sm:flex-col 2sm:justify-around 2sm:min-h-screen 2sm:min-w-full">
            <Description />
            <Photo animation />
        </div>
    )
}