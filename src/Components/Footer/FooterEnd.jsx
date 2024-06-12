// FooterEnd.js
import EndFooterList from './../../constant/EndFooterList'; // Adjust the path if necessary

const FooterEnd = () => {
    return (
        <section className="bg-[#131A22] py-8">
            <div className="max-w-5xl mx-auto">
                <div className="px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-content-center text-gray-400">
                    {EndFooterList.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-white text-base font-bold mb-2">{section.title}</h3>
                            <ul className="flex flex-col gap-1">
                                {section.items.map((item, idx) => (
                                    <li key={idx} className="footerLink w-max cursor-pointer">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center gap-4 mt-10 mb-[2px] text-[#DDD] text-[12px] font-semibold'>
                    <h3>Condition of Use & Sale</h3>
                    <h3>Privacy Notice</h3>
                    <h3>Interest-Based Ads</h3>
                </div>
                <div className='text-center'>
                    <h3 className="font-semibold text-[12px] text-[#DDD] mb-[2px]">© 1996-2023, Amazon.com, Inc. or its affiliates</h3>
                </div>
            </div>
        </section>
    );
};

export default FooterEnd;
