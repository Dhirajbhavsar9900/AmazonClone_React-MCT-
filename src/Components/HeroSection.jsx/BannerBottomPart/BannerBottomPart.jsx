// import { useState } from 'react';
import offers from "../../../constant/Offers";

const BannerBottomPart = () => {
    

    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-4 px-4 gap-4 z-50 pb-4">
            {offers.map((offer) => (
                <div key={offer} className="mx-auto p-4 bg-white shadow-2xl cursor-pointer">
                    <h1 className="text-xl font-medium py-2">{offer.Head}</h1>
                    <img src={offer.Img} alt="" />
                    <p className="navigateButtonLinks text-base py-2">Shop now</p>
                </div>
            ))}
            <div className="bg-white p-4 h-max shadow-2xl">
                <h1 className="text-xl font-medium py-2">Sign in for your best experience</h1>
                <button className="bg-yellow-400 shadow-sm text-black font-semibold px-4 py-2 text-sm rounded-lg w-full mt-auto">
                    Sign in Securely
                </button>
            </div>
        </section>
    );
};

export default BannerBottomPart;
