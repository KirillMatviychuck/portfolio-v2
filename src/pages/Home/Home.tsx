import bgImage from '../../assets/images/main-background/main-background.jpg'
// @ts-ignoreya
import ReactTypingEffect from 'react-typing-effect';

export const Home = () => {
    return (
        <div className="w-full h-[94vh] relative flex flex-col justify-center items-center">
            <div className='absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/70 to-black/70'></div>
            <img className='absolute left-0 top-0 w-full h-full z-0 object-cover' src={bgImage} alt="background" />
            <div className='flex'>
                <h1 className='relative text-gray-400 text-5xl font-extrabold tracking-wider mr-2.5 z-20'>KIRILL</h1>
                <h1 className='relative text-white text-5xl font-extrabold tracking-wider ml-2.5 z-20'>MATVIICHUK</h1>
            </div>
            <p className='relative z-20 text-white mt-2.5'>
                <ReactTypingEffect
                    text={[
                        "Hello there, I'm a front-end developer",
                        'If you are interested in my skills, write to me, all information in contacts',
                        'Have a nice day 😉'
                    ]}
                    eraseDelay={2000}
                    typingDelay={1000}
                    eraseSpeed={30}
                    speed={100}
                />
            </p>
        </div>
    )
}