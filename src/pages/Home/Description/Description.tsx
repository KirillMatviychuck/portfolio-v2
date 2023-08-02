import { ReactComponent as Instagram } from '../../../assets/images/socials/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/images/socials/facebook.svg';
import { ReactComponent as Linkedin } from '../../../assets/images/socials/linkedin.svg';
import { ReactComponent as Telegram } from '../../../assets/images/socials/telegram.svg';
import { Socials } from '../../../common/components/Socials/Socials';
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';
const Slide = require('react-reveal/Slide')

export const Description = () => {
    return (
        <Slide left cascade>
            <div className="w-1/2 flex flex-col h-[380px] justify-between relative text-white 
            2sm:items-center 2sm:w-full 2sm:h-[340px]">
                <h3 className="text-4xl font-bold 2sm:text-lg">Hello, It's me</h3>
                <h1 className="text-5xl font-bold 2sm:text-lg">Kirill <label>&nbsp;<span className="text-cyan-400 font-bold">Matviichuk</span></label></h1>
                <h3 className="text-4xl font-bold 2sm:text-base">And I'm a
                    <span className="text-cyan-400 ml-2">
                        <ReactTypingEffect
                            text={["Frontend Developer"]}
                            eraseSpeed={50}
                        />
                    </span>
                </h3>
                <p className="text-lg 2sm:text-sm 2sm:text-justify">
                    I am a person with great passion for programming. Always interested
                    in learning something new and improving the skills I already have.
                </p>
                <div className="flex 2sm:ml-4">
                    <Socials children={<Linkedin fill='white' />} socialLink='https://www.linkedin.com/in/kirill-matviichuk/' />
                    <Socials children={<Telegram fill='white' />} socialLink='https://t.me/kirillmt' />
                    <Socials children={<Facebook fill='white' />} socialLink='https://www.facebook.com/profile.php?id=100009204488025' />
                    <Socials children={<Instagram fill='white' />} socialLink='https://www.instagram.com/kirill.mt/' />
                </div>
                <a href="https://cv.djinni.co/fe/f1ecfc2f8bbb5c8e13f5b4e44ad871/CV_Kirill_Matviichuk.pdf" target='_blank' rel="noopener noreferrer" className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white relative z-10">Download CV</a>
                <a href="https://cv.djinni.co/fe/f1ecfc2f8bbb5c8e13f5b4e44ad871/CV_Kirill_Matviichuk.pdf" className="flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white absolute bottom-0 left-0 blur z-0 2sm:left-12">Download CV</a>
            </div>
        </Slide>

    )
} 