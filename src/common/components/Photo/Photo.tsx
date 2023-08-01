import { FC } from "react";
import myPhoto from "../../../assets/images/photo/me1.png"
const Zoom = require('react-reveal/Zoom');


export const Photo: FC<Props> = ({ animation }) => {
    return (
        <Zoom>
            <div className="w-[410px] h-[410px] 2sm:w-[230px] 2sm:h-[230px]">
                <div className={`flex justify-center items-center w-full h-full rounded-full relative ${animation && "animate-[wiggle_4s_ease-in-out_infinite]"}`}>
                    <span className="absolute w-full h-full rounded-full bg-cyan-400 blur-lg"></span>
                    <span className="absolute w-full h-full rounded-full bg-cyan-400"></span>
                    <div className="after:content-[''] absolute w-[380px] h-[380px] bg-gray-800 rounded-full 2sm:w-[190px] 2sm:h-[190px]">
                        <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden 2sm:w-[190px] 2sm:h-[190px]">
                            <img className="w-[350px] object-cover absolute top-[25px]" src={myPhoto} alt="me" />
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

type Props = {
    animation: boolean
}