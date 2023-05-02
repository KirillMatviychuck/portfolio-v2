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
        <div className="text-white w-1/2 flex flex-col h-[45%] justify-between relative">
            <Slide left>
                <h3 className="text-4xl font-bold">Hello, It's me</h3>
                <h1 className="text-5xl font-bold">Kirill Matviichuck</h1>
                <h3 className="text-4xl font-bold">And I'm a
                    <span className="text-cyan-400 ml-2">
                        <ReactTypingEffect
                            text={["Frontend Developer"]}
                            eraseSpeed={50}
                        />
                    </span>
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda vero minus architecto libero tempora unde optio aut fuga
                </p>
                <div className="flex">

                    <Socials children={<Linkedin fill='white' />} socialLink='https://www.linkedin.com/in/kirill-matviichuk/' />
                    <Socials children={<Telegram fill='white' />} socialLink='https://t.me/kirillmt' />
                    <Socials children={<Facebook fill='white' />} socialLink='https://www.facebook.com/profile.php?id=100009204488025' />
                    <Socials children={<Instagram fill='white' />} socialLink='https://www.instagram.com/kirill.mt/' />

                </div>
                <a href="https://cv.djinni.co/fe/f1ecfc2f8bbb5c8e13f5b4e44ad871/CV_Kirill_Matviichuk.pdf" target='_blank' rel="noopener noreferrer" className="block flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white relative z-10">Download CV</a>
                <a href="#" className="block flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-800 font-bold tracking-wide hover:text-white absolute bottom-0 left-0 blur z-0">Download CV</a>
            </Slide>
        </div>
    )
} 