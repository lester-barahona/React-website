import React from 'react';
import './../App.css';
import HeroSection from './../components/heroes/HeroSection';
import Cards from './../components/cards/Cards';


const  Home= () => {
    return ( 
        <>
            <HeroSection/>
            <Cards/>       
        </>
     );
}
 
export default Home;