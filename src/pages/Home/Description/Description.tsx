import { ReactComponent as Instagram } from '../../../assets/images/socials/instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/images/socials/facebook.svg';
import { ReactComponent as Linkedin } from '../../../assets/images/socials/linkedin.svg';
import { ReactComponent as Telegram } from '../../../assets/images/socials/telegram.svg';
import { Socials } from '../../../common/components/Socials/Socials';

export const Description = () => {
    return (
        <div className="text-white w-1/2 flex flex-col h-[45%] justify-between">
            <h3 className="text-4xl font-bold">Hello, It's me</h3>
            <h1 className="text-5xl font-bold">Kirill Matviichuck</h1>
            <h3 className="text-4xl font-bold">And I'm a <span className="text-cyan-400">Frontend Developer</span></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda vero minus architecto libero tempora unde optio aut fuga
            </p>
            <div className="flex">
                <Socials children={<Linkedin fill='white' />} socialLink='#' />
                <Socials children={<Telegram fill='white' />} socialLink='#' />
                <Socials children={<Facebook fill='white' />} socialLink='#' />
                <Socials children={<Instagram fill='white' />} socialLink='#' />
            </div>
            <a href="#" className="block flex justify-center items-center w-[170px] h-[45px] py-4 px-4 bg-cyan-400 rounded-full text-gray-700 font-bold tracking-wide shadow-cyan-400 shadow-2xl">Download CV</a>
        </div>
    )
} 