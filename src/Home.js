import React, {Component} from 'react';

import Top from './components/Top';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Form from './components/Form';

class Home extends Component {
    render() {
        return(
            <main>
                <Top />
                <About />
                <Contact />
                <Skills />
                <Projects />
                <Form />


            </main>
        )
    }
}

export default Home;