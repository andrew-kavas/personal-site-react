import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    useEffect(() => {
        // Update the document title 
        document.title = 'About';
    });

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>I'm Andrew Kavas, a software engineer with first-principles mindset.</p>
                
                <p>I have experience implementing software solutions in back end development, API integration, and data science. I enjoy solving abstract problems with real-world impact.</p>
            </Content>
        </div>
    );
}

export default AboutPage;