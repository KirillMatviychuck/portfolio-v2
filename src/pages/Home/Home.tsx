import { Description } from "./Description/Description"
import { Photo } from "./Photo/Photo"

export const Home = () => {
    return (
        <div className="h-[91.4vh] w-[70%] bg-gray-800 flex justify-between items-center self-center">
            <Description />
            <Photo />
        </div>
    )
}