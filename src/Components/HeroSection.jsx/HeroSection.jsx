
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import BannerBottomPart from './BannerBottomPart/BannerBottomPart';
const HeroSection = () => {
    return (
        <div className="home bg-[#E5E7EB]">
            <Banner />
            <BannerBottomPart/>
            <Cards/>
            
        </div>
    );
};

export default HeroSection;

