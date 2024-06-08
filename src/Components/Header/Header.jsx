import './Header.css';
import Logo from './../../assets/images/amazon-png-logo-vector-6701.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Header = () => {
    return (
        <>
            <nav className="bg-[#131921] flex flex-wrap items-center p-2">
                <div className="flex items-center flex-grow mx-2">
                    <div className="flex items-center cursor-pointer mx-2">
                        <img className="w-[80px] sm:w-[100px] md:w-[110px]" src={Logo} alt="Amazon Logo" />
                        <span className="text-white text-center hidden md:inline">.in</span>
                    </div>
                    <div className="flex md:hidden items-center">
                        <div className="flex flex-col cursor-pointer mx-2">
                            <span className="text-gray-200 font-semibold text-[10px] sm:text-[12px] md:text-[14px]">Hello, sign in</span>
                            <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px]">Account and Lists</span>
                        </div>
                        <div className="flex items-center cursor-pointer mx-2">
                            <ShoppingCartOutlinedIcon style={{ fill: 'white', width: '30px', height: '35px' }} />
                            <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px]">Cart</span>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-center items-center px-2 cursor-pointer">
                        <span className="text-gray-300 font-bold text-[10px] sm:text-[12px] md:text-[14px] ml-3">Delivery To Nashik</span>
                        <div className="flex items-center">
                            <LocationOnOutlinedIcon style={{ fill: 'white' }} />
                            <span className="text-gray-300 font-semibold text-[13px] sm:text-[15px] md:text-[17px]">Update Location</span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow mx-2 py-3 px-1 flex justify-center lg:justify-start">
                    <form action="search" className="flex justify-center items-center w-full">
                        {/* Conditional rendering for select dropdown */}
                        <div className=" bg-[#D4D4D4] cursor-pointer md:block hidden">
                            <select name="" id="" className="bg-[#D4D4D4] rounded-l-sm p-2 w-12 sm:w-14 md:w-16 outline-none">
                                <option value="">All</option>
                                <option value="">Mobiles</option>
                                <option value="">Laptops</option>
                                <option value="">Home Appliances</option>
                            </select>
                        </div>
                        <input className="p-2 w-full sm:w-[500px] md:w-[700px] lg:w-[900px] outline-none" type="search" placeholder="Search Amazon.in" />
                        <div className="flex p-2 bg-[#F3A847] cursor-pointer rounded-r-sm">
                            <SearchIcon style={{ fill: 'black', width: '24px', height: '24px' }} />
                        </div>
                    </form>
                </div>

                <div className="hidden md:flex items-center mx-2">
                    <div className="flex flex-col cursor-pointer mx-2">
                        <span className="text-gray-200 font-semibold text-[10px] sm:text-[12px] md:text-[14px]">Hello, sign in</span>
                        <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px]">Account and Lists</span>
                    </div>
                    <div className="flex flex-col cursor-pointer mx-2">
                        <span className="text-gray-200 font-semibold text-[10px] sm:text-[12px] md:text-[14px]">Return</span>
                        <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px]">& Order</span>
                    </div>
                    <div className="flex items-center cursor-pointer mx-2">
                        <ShoppingCartOutlinedIcon style={{ fill: 'white', width: '30px', height: '35px' }} />
                        <span className="text-white font-semibold text-[13px] sm:text-[15px] md:text-[17px]">Cart</span>
                    </div>
                </div>
            </nav>

            <section className='bg-[#232F3E]'>
                <div className='flex text-white justify-center items-center  '>
                    <button className="text-white focus:outline-none p-3 m-1">
                        <span className="block h-1 w-6 bg-white mb-1"></span>
                        <span className="block h-1 w-6 bg-white mb-1"></span>
                        <span className="block h-1 w-6 bg-white"></span>
                    </button>
                    <span>All</span>
                </div>
                
            </section>
        </>
    )
}

export default Header;
