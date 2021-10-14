import React  from 'react';
import Header from '../../Components/Header/Header';
import ServiceSection from '../../Components/ServiceSection/ServiceSection';
import AboutSection from '../../Components/AboutSection/AboutSection';
import AdvertisingSection from '../../Components/AdvertisingSection/AdvertisingSection';
import ProductsSection from '../../Components/ProductsSection/ProductsSection';

function Home() {

    return (
        <>
            <Header title="Your food is waiting for you"/>
            <AboutSection image='./images/about-2.jpg'/>
            <ServiceSection/>
            <ProductsSection/>
            <AdvertisingSection/>
        </>
    )
}

export default Home
