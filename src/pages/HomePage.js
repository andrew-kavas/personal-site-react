import React, { useEffect } from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function HomePage(props) {

    useEffect(() => {
        // Update the document title 
        document.title = 'Andrew Kavas';
    });

    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </div>
    );
}

export default HomePage;