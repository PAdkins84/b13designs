import { FaShopify, FaWordpress, FaReact } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="flex mx-auto justify-evenly max-w-6xl">
            <div className="flex mx-auto p-8 flex-col max-w-xs bg-purple-100 rounded shadow-lg">
               <FaShopify className="mx-auto" size='60' />
               <h2 className="mx-auto py-5 text-xl">Shopify</h2>
               <p className="mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dignissimos, veritatis eaque nobis accusantium quae natus maxime aspernatur porro ratione distinctio praesentium harum asperiores, a voluptate. Perspiciatis consequatur harum ab!</p>
            </div>
            <div className="flex mx-auto p-8 flex-col max-w-xs bg-purple-100 rounded shadow-lg">
                <FaWordpress className="mx-auto" size='60' />
                <h2 className="mx-auto py-5 text-xl">Wordpress</h2>
               <p className="mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dignissimos, veritatis eaque nobis accusantium quae natus maxime aspernatur porro ratione distinctio praesentium harum asperiores, a voluptate. Perspiciatis consequatur harum ab!</p>
            </div>
            <div className="flex mx-auto p-8 flex-col max-w-xs bg-purple-100 rounded shadow-lg">
                <FaReact className="mx-auto" size='60' />
                <h2 className="mx-auto py-5 text-xl">React</h2>
               <p className="mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, dignissimos, veritatis eaque nobis accusantium quae natus maxime aspernatur porro ratione distinctio praesentium harum asperiores, a voluptate. Perspiciatis consequatur harum ab!</p>
            </div>
        </div>
    )
}

export default Services