import { FaShopify, FaWordpress, FaReact } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="flex">
            <div className="flex space-x-10 mx-auto py-10">
               <FaShopify size='60' />
                <FaWordpress size='60' />
                <FaReact size='60' /> 
            </div>
        </div>
    )
}

export default Services