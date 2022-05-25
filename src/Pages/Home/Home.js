import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import InfoFooter from './InfoFooter';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <Banner />
            <Product/>
            <BusinessSummary />

            <InfoFooter />
            <Footer />
        </div>
    );
};

export default Home;