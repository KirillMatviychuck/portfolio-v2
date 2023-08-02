import { Description } from "./Description/Description"
import { Photo } from "../../common/components/Photo/Photo"

export const Home = () => {
    return (
        <div className="h-[92.3vh] w-[70%] bg-gray-800 flex justify-between items-center self-center 2sm:flex-col 2sm:justify-around 2sm:h-screen">
            <Description />
            <Photo animation />
        </div>
    )
}