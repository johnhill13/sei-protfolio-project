import React, {Component} from 'react';

import Top from './components/Top';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Form from './components/Form';


import {Divider} from 'semantic-ui-react';
class Home extends Component {
    render() {
        return(
            <main>
                <Top />
                <About />
                <Divider />
                <Skills />
                <Projects />
                <Form />
                <Contact />
                <Divider />


            </main>
        )
    }
}

export default Home;