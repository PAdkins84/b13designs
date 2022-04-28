const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-purple-300' : 'hidden'}
        onClick={toggle}>
            <a className="p-4 tracking-widest">Home</a>
            <a className="p-4 tracking-widest">Services</a>
            <a className="p-4 tracking-widest">About</a>
            <a className="p-4 tracking-widest">Contact</a>
        </div>
    )
}

export default Dropdown