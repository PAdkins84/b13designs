import { AiOutlineCheckCircle } from "react-icons/ai";

const PricingPage = () => {
    return (
        <div className="max-w-3xl mx-auto bg-gray-100 rounded">
            <div className="text-center my-10">
                <h1 className="font-bold text-3xl mb-2">Pricing Table</h1>
                <h4 className="text-gray-600">See what we have to offer.</h4>
            </div>

        <div className="flex flex-col md:flex-row px-3 md:px-0">
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-0 md:mr-4 mb-10 md:mb-0">
                <h3 className="text-gray-600 text-lg">Base</h3>
                <p className="text-gray-600 mt-1"><span className="font-bold text-black text-4xl">£69</span>/Month</p>
                <p className="text-sm text-gray-600 mt-2">For most businesses that want to optimise web queries</p>
                <div className="text-sm text-gray-600 mt-4">
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />All limited links</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Own analytics platform</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Chat support</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Optimize hashtags</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Unlimited users</p>
                </div>
                <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
            </div>
            <div className="w-full md:w-1/3 text-white bg-purple-700 rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mr-0 md:mr-4 mb-10 md:mb-0">
                <h3 className="text-lg">Popular</h3>
                <p className="mt-1"><span className="font-bold text-4xl">£99</span>/Month</p>
                <p className="text-sm opacity-75 mt-2">For most businesses that want to optimise web queries</p>
                <div className="text-sm mt-4">
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />All limited links</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Own analytics platform</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Chat support</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Optimize hashtags</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Unlimited users</p>
                </div>
                <button className="w-full text-purple-700 bg-white rounded opacity-75 hover:opacity-100 hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
            </div>
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow hover:shadow-xl transition duration-100 ease-in-out p-6 mb-10 md:mb-0">
                <h3 className="text-gray-600 text-lg">Enterprise</h3>
                <p className="text-gray-600 mt-1"><span className="font-bold text-black text-4xl">£299</span>/Month</p>
                <p className="text-sm text-gray-600 mt-2">For most businesses that want to optimise web queries</p>
                <div className="text-sm text-gray-600 mt-4">
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />All limited links</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Own analytics platform</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Chat support</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Optimize hashtags</p>
                    <p className="my-2"><AiOutlineCheckCircle className="mr-2 ml-1" style={{display : 'inline-block'}} />Unlimited users</p>
                </div>
                <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">Choose Plan</button>
            </div>
        </div>
        </div>
            
    )
}

export default PricingPage