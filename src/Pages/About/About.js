import React from 'react'
import AboutSection from '../../Components/AboutSection/AboutSection'
import Header from '../../Components/Header/Header'
import Title from '../../Components/Title/Title'

function About() {

    return (
        <>
            <Header title="Who are we?"/>
            <Title title="Who are we?" />
            <AboutSection image='./images/about-1.jpg' />
            <AboutSection image='./images/about-2.jpg' isImageRight={false} />
        </>
    )
}

export default About
