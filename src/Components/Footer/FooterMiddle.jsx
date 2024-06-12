// FooterMiddle.js
import FooterList from './../../constant/FooterList'; // Adjust the path if necessary
import AmazonImg from './../../assets/images/footr Img/logo-09f4bace.png'
import India from './../../assets/images/footr Img/download.png'
const FooterMiddle = () => {
    return (
        <section className="bg-[#232F3E] text-white">
            <div className="border-b-[1px] border-gray-500 py-10">
                <div className="max-w-5xl mx-auto text-gray-300">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 px-8 justify-center place-content-center">
                        {FooterList.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-white text-base font-bold mb-2">{section.Head}</h3>
                                <ul className="flex flex-col gap-1">
                                    {section.Links.map((link, idx) => (
                                        <li key={idx} className="footerLink w-max cursor-pointer">{link}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex gap-6 items-center justify-center py-6'>
                <a href="" className='border boder-1 border-gray-400 hover:border-yellow-300 transition-all duration-150 p-2 px-3'>
                    <img className='w-14 pt-1' src={AmazonImg} alt="" />
                </a>
                <a href="" className='pb-2 border boder-1 border-gray-400 hover:border-yellow-300 transition-all duration-150 p-1 px-3'>
                    <span className='text-lg'>English</span>
                </a>
                <a href="" className='border boder-1 flex items-center border-gray-400 hover:border-yellow-300 transition-all duration-150 p-1 px-2'>
                    <img className='w-7 pt-1' src={India} alt="" />
                    <span className='ml-2'>India</span>
                </a>
            </div>
        </section>
    );
}

export default FooterMiddle;
