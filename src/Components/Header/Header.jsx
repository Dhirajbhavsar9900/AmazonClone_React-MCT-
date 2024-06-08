import { useState } from 'react';
import './Header.css';
import Logo from './../../assets/images/amazon-png-logo-vector-6701.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Image from './../../assets/images/amazon-logo-6201.png';

const Header = () => {
    const menuItems = [
        { id: 1, text: 'Amazon MinTV' },
        { id: 2, text: 'Sell' },
        { id: 3, text: 'Best Sellers' },
        { id: 4, text: 'Mobiles' },
        { id: 5, text: 'Todays Deal' },
        { id: 6, text: 'Fashion' },
        { id: 7, text: 'Electronics' },
        { id: 8, text: 'Prime' },
        { id: 9, text: 'Home kitchen' },
        { id: 10, text: 'Customer Service' },
        { id: 11, text: 'Amazon Pay' },
        { id: 12, text: 'Computers' },
        { id: 13, text: 'Books' },
        { id: 14, text: 'Car & Motorbikes' },
        { id: 15, text: 'Gift' },
        { id: 18, text: 'Sports fitness And OutDoors' }
    ];

    const trending =[
        {
            text: 'Best Sellers',
        },
        {
            text: 'New Realease',
        },
        {
            text: 'Movers and Shakers',
        },
    ]
    

    const DigitalContent =[
        {
            text: 'Amazon MiniTv_free Entertainment',
        },
        {
            text: 'Echo & Alexa',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },        
    ]

    const ShopCat =[
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },

    ]

    const ProgramAndFea = [
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },

    ]

    const HelpsSetting = [
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
        {
            text: 'Fire Tv',
        },
       
    ]



    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen ? 'Menu is open' : 'Menu is closed');
    };

    return (
        <div className={`header-wrapper ${isMenuOpen ? 'overlay-open' : ''}`}>
            {/* Your navbar */}
            <nav className="bg-[#131921] flex flex-wrap items-center p-2">
                <div className="flex items-center flex-grow mx-2">
                    <button onClick={toggleMenu} className="text-white focus:outline-none p-2 m-1 menu-button md:hidden">
                        {isMenuOpen ? <CloseIcon /> : (
                            <>
                                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                                <span className="block h-0.5 w-5 bg-white"></span>
                            </>
                        )}
                    </button>
                    <div className="flex items-center cursor-pointer mx-2">
                        <img className="w-[80px] sm:w-[100px] md:w-[110px]" src={Logo} alt="Amazon Logo" />
                        <span className="text-white text-center hidden md:inline">.in</span>
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
                        <div className="bg-[#D4D4D4] cursor-pointer hidden md:block">
                            <select className="bg-[#D4D4D4] rounded-l-sm p-2 w-12 sm:w-14 md:w-16 outline-none">
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

                <div className="md:hidden flex items-center">
                    <div className="flex flex-col cursor-pointer mx-2">
                        <span className="text-gray-200 font-semibold text-[10px] sm:text-[12px]">Hello, sign in</span>
                        <span className="text-white font-semibold text-[13px] sm:text-[15px]">Account and Lists</span>
                    </div>
                    <div className="flex items-center cursor-pointer mx-2">
                        <ShoppingCartOutlinedIcon style={{ fill: 'white', width: '30px', height: '35px' }} />
                        <span className="text-white font-semibold text-[13px] sm:text-[15px]">Cart</span>
                    </div>
                </div>

            </nav>

            <section className="bg-[#232F3E]">
                <div className="flex items-center text-white p-2">
                    <button onClick={toggleMenu} className="text-white focus:outline-none p-2 m-1 menu-button">
                        {isMenuOpen ? <CloseIcon /> : (
                            <>
                                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                                <span className="block h-0.5 w-5 bg-white mb-1"></span>
                                <span className="block h-0.5 w-5 bg-white"></span>
                            </>
                        )}
                    </button>
                    <div className="hidden md:flex">
                    {menuItems.map((item) => (
                        <div key={item.id} className="px-4 py-2">
                            <span className="text-sm text-white">{item.text}</span>
                        </div>
                    ))}
                    </div>
                </div>

                <div className={`menu-slide-in overflow-y-scroll   ${isMenuOpen ? 'open' : ''}`}>
                    <div className='bg-white'>
                        <div className="px-4 py-2 mx-3 mt-10 flex justify-between items-center ">
                            <span className="text-x  text-black font-semibold">Hello, sign in</span>
                            <img className='w-[40px] rounded-full h-[40px] cursor-pointer ' src={Image} alt="" />
                        </div>
                     
                    </div>
                    <div>
                    <div className="px-4 py-2 mt-3 flex font-sans ">
                        <h1 className="text-lg text-white font-bold ">Trending</h1>
                    </div>
                    {trending.map((item) => (
                        <div key={item.id} className="px-4 py-2">
                            <span className="text-sm text-white cursor-pointer">{item.text}</span>
                        </div>
                    ))}

                    <div className="px-4 py-2 mt-3 flex font-sans ">
                        <h1 className="text-lg text-white font-bold ">Digital Content and Devices</h1>
                    </div>
                    {DigitalContent.map((item) => (
                        <div key={item.id} className="px-4 py-2">
                            <span className="text-sm text-white cursor-pointer">{item.text}</span>
                        </div>
                    ))}

                    <div className="px-4 py-2 mt-3 flex font-sans ">
                        <h1 className="text-lg text-white font-bold ">Shop by Category</h1>
                    </div>
                    {ShopCat.map((item) => (
                        <div key={item.id} className="px-4 py-2">
                            <span className="text-sm text-white cursor-pointer">{item.text}</span>
                        </div>
                    ))}
                    <div className="px-4 py-2 mt-3 flex font-sans ">
                        <h1 className="text-lg text-white font-bold ">Shop by Category</h1>
                    </div>
                    {ProgramAndFea.map((item) => (
                        <div key={item.id} className="px-4 py-2">
                            <span className="text-sm text-white cursor-pointer">{item.text}</span>
                        </div>
                    ))}
                    <div className="px-4 py-2 mt-3 flex font-sans ">
                        <h1 className="text-lg text-white font-bold ">Helps & Settings</h1>
                    </div>
                        {HelpsSetting.map((item) => (
                            <div key={item.id} className="px-4 py-2">
                                <span className="text-sm text-white cursor-pointer">{item.text}</span>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </section>

        </div>
    );
};

export default Header;
