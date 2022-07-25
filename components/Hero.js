import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className='flex mt-10 justify-center w-full pb-44'>
                <div className='flex flex-col justify-center md:p-28 w-full p-10 md:w-1/2'>
                    <h1 className='w-full font-bold text-4xl lg:text-6xl animate-move-bg bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:400%]'>B13Designs.com</h1>
                    <h2 className='text-gray-500 tracking-widest pt-2 text-xs md:text-1xl'>Let me bring your visions to reality...</h2>
                    <button className='w-1/2 py-2 font-bold bg-white text-purple-400 mt-5 border border-purple-400 rounded hover:bg-purple-400 hover:text-white shadow-xl transition duration-200 ease-in-out'>Let's work</button>
                </div>
                <div className='lg:flex justify-center w-1/2 hidden'>
                    <Image src="/websiteillust.png" alt="illustration" width={500} height={500} />
                </div>
            </div>
        </>
    )
}

export default Hero