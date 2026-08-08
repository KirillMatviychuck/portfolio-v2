import { ContactForm } from "./ContactForm/ContactForm"
const Fade = require('react-reveal/Fade')

export const Contacts = () => {
    return (
        <div className="h-[93vh] w-[70%] bg-gray-800 flex justify-center items-center self-center text-white 2sm:h-screen 2sm:mb-10">
            <Fade>
                <div className="w-full h-full flex flex-col items-center">
                    <ContactForm />
                </div>
            </Fade>
        </div>
    )
}