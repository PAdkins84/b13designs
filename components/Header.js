import Image from 'next/image'

const Header = ({toggle}) => {
      return (
          <>
          <nav className="flex justify-between items-center h-16 bg-transparent relative shadow-sm">
            <a className="pl-8 font-bold uppercase" role="navigation" href="/">B13 Designs</a>
            
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>

            <div className="pr-8 md:block hidden">
                        <a className="p-4 tracking-widest">Home</a>
                        <a className="p-4 tracking-widest">Services</a>
                        <a className="p-4 tracking-widest">About</a>
                        <a className="p-4 tracking-widest">Contact</a>
            </div>
        </nav>
          </>
        
      )
  }

export default Header