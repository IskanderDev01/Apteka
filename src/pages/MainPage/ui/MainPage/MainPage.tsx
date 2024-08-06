import { AboutCompanyBanner, Banner, Filials, FounderCompanyBanner, PartnersBanner } from 'pages/MainPage'
import { useRef } from 'react';

const MainPage = () => {
    const partnersRef = useRef<HTMLDivElement | null>(null);
    const founderRef = useRef<HTMLDivElement | null>(null);
    const handleScrollToPartners = () => {
        if (partnersRef.current) {
            partnersRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleScrollToFounder = () => {
        if (founderRef.current) {
            founderRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>
            <Banner onScrollToPartners={handleScrollToPartners} />
            <AboutCompanyBanner onScrollToPartners={handleScrollToFounder} />
            <Filials />
            <div ref={founderRef}>
                <FounderCompanyBanner />
            </div>
            <div ref={partnersRef}>
                <PartnersBanner />
            </div>
        </>
    );
};

export default MainPage;
