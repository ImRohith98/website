import React from 'react';
import InfoSection from "../../components/infoSection";
import Card from "../../components/card/card";

export const homeObjOne = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'HSAI',
    headline: 'Designed to Transform you into a highly skilled Software Professional',
    description:
        'We help Students increase their Skills. Our team of unique specialist can help you achieve your Dream goals.',
    buttonLabel: 'Get Started',
    imgStart: '',
    img: require('../../images/ai.jpg'),
    alt: 'AI',
    start: ''
}

export const homeObjTwo = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Instant Setup',
    headline: 'Extremely quick onboarding process',
    description:
        "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
    buttonLabel: 'Learn More',
    imgStart: '',
    img: require('../../images/ai.jpg'),
    alt: 'Vault',
    start: ''
};

export const homeObjThree = {
    primary: false,
    lightBg: true,
    lightTopLine: false,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Sarah Jeni',
    headline:
        'Ultra helped me increase my revenue by over 3X in less than 3 months!',
    description:
        "Their team is wonderful! I can't believe I didn't start working with them earlier.",
    buttonLabel: 'View Case Study',
    imgStart: 'start',
    img: require('../../images/ai.jpg'),
    alt: 'Vault',
    start: 'true'
};

export const homeObjFour = {
    primary: true,
    lightBg: false,
    lightTopLine: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Secure Database',
    headline: 'All your data is stored on our secure server',
    description:
        'You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.',
    buttonLabel: 'Sign Up Now',
    imgStart: 'start',
    img: require('../../images/ai.jpg'),
    alt: 'Vault',
    start: 'true'
};

function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
            <Card />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    );
}

export default Home;