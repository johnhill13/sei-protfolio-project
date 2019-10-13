import React from 'react';
import './About.css';
import { Header, Container} from 'semantic-ui-react';


const About = () => {
    return(
        <Container >
            <Header as='h2'>About Me</Header>
            <p class="about-me">
            I am passionate and dedicated to technology, living and breathing it since I was old enough to hold my first job. I started in consumer sales and quickly realized I wanted to have a deeper impact by putting my knowledge and interests to good use. Working at Apple for 7 years allowed me to do just that, as an Apple Genius and then on a Software QA team I had the best experience of my professional life. Working collaboratively towards a shared goal, experiencing software development in a continuous integration environment, and being responsible for testing was a monumental achievement. Afterwards, I doubled down on my python studies, continued building projects in swift and eventually decided to leave Apple so I could dedicate myself entirely to becoming an engineer. I have recently gained experience as a full-stack engineer having become comfortable using new tools and technologies to build robust, secure, and responsive apps.
            </p>
        </Container>
    )
}





export default About;
