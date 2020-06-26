import React from 'react';
import './About.css';
import { Header, Container} from 'semantic-ui-react';


const About = () => {
    return(
        <Container >
            <Header as='h2'>About Me</Header>
            <p className="about-me">
            I am a passionate and dedicated individual living and breathing everything related to tech for the better part of 10 years now. My first "real" job as a sales expert I became known for being a top performer having a deep understanding of the Mac ecosystem and connecting it to the customers needs. Maneuvering into hardware/software troubleshooting was a great step and it was a great decision for me to join Apple; it allowed my to leverage my deep knowledge of the ecosystem and develop formal troubleshooting techniques and best practices. I joined a CoreOS QA team where I realized that I definitely should have studied engineering in college and where I received the best development to date. I worked at Apple for 7 years which provided me every opportunity to do exactly what I wanted; troubleshooting and repairing as an Apple Genius then hardware/software validation and testing as a QA intern. I worked collaboratively daily towards a shared goal, experienced software development in a continuous integration environment and was responsible for portion of the testing and validation which was a monumental achievement. Afterwards, I doubled down on my Python studies and continued building projects for fun using Swift; eventually I decided to leave Apple to dedicate myself entirely to becoming an engineer. I recently gained experience in full-stack engineering studying Javascript and related technologies becoming extremely comfortable using brand new tools and technologies to build robust, secure, and responsive apps. As a consultant to small businesses I educate their decision makers regarding their choice of website builders, including integrations, and growth potential on any given platform. I build custom integrations, websites, and software to meet their every need. I am highly trusted by those that I work with and I love to celebrate their successes more than my own.  
            </p>
        </Container>
    )
}





export default About;
