import bgImage from '../../assets/images/main-background/main-background.jpg'

export const Home = () => {
    return (
        <div className="w-full h-[94vh] relative flex justify-center items-center">
            <div className='absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70'></div>
            <img className='absolute left-0 top-0 w-full h-full z-0 object-cover' src={bgImage} alt="background" />
            <div className='flex'>
                <h1 className='relative text-gray-400 text-5xl font-bold z-20'>KIRILL</h1>
                <h1 className='relative text-white text-5xl z-20'>Matviichuk</h1>
            </div>
        </div>
    )
}