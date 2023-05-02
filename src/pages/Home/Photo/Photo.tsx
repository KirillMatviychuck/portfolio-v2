import myPhoto from "../../../assets/images/photo/me1.png"
const Zoom = require('react-reveal/Zoom');


export const Photo = () => {
    return (
        <Zoom>
            <div className="w-[410px] h-[410px]">
                <div className="flex justify-center items-center w-full h-full rounded-full relative animate-[wiggle_4s_ease-in-out_infinite]">
                    <span className="absolute w-full h-full rounded-full bg-cyan-400 blur-lg"></span>
                    <span className="absolute w-full h-full rounded-full bg-cyan-400"></span>
                    <div className="after:content-[''] absolute w-[380px] h-[380px] bg-gray-800 rounded-full">
                        <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden">
                            <img className="m-w-[350px] object-cover absolute top-[25px]" src={myPhoto} alt="me" />
                        </div>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}