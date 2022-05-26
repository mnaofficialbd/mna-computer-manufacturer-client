import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import InfoFooter from './InfoFooter';
import OurStock from './OurStock';
import Product from './Product';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner />
            <Product />

            <BusinessSummary />
            <Review/>
            <OurStock />
            <InfoFooter />
            <Footer />
        </div>
    );
};

export default Home;