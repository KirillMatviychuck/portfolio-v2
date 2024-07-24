import { ContactForm } from "./ContactForm/ContactForm"
const Fade = require('react-reveal/Fade')
const Flip = require('react-reveal/Flip')

export const Contacts = () => {
    return (
        <div className="h-[91.4vh] w-[70%] bg-gray-800 flex justify-center items-center self-center text-white 2sm:h-screen 2sm:mb-10">
            <div className="h-[90%] w-full flex flex-col items-center">
                <Flip top>
                    <h1 className="flex text-5xl font-semibold mb-20 2sm:flex-col 2sm:justify-center 2sm:items-center"><span className="mr-2">Contact</span> <span className="ml-2 text-cyan-400">Me</span></h1>
                </Flip>
                <Fade>
                    <div className="w-full h-full flex flex-col items-center">
                        <ContactForm />
                    </div>
                </Fade>
            </div>
        </div>
    )
}