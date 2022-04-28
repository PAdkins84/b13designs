import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className='flex mt-10 justify-center w-full'>
                <div className='flex flex-col justify-center p-28 w-1/2'>
                    <h1 className='font-bold text-6xl animate-move-bg bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent bg-[length:400%]'>B13Designs.com</h1>
                    <h2 className='text-gray-500 tracking-widest p-2'>Let me bring your visions to reality...</h2>
                    <button className='w-1/2 py-2 font-bold bg-white text-purple-400 mt-5 border border-purple-400 rounded hover:bg-purple-500 hover:text-white shadow-xl transition duration-200 ease-in-out'>Let's work</button>
                </div>
                <div className='flex justify-center w-1/2'>
                <Image src="/websiteillust.png" alt="illustration" width={500} height={500} />
                </div>
             </div>
        </>
    )
}

export default Hero