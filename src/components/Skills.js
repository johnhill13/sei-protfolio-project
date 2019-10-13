import React from 'react';
import './Skills.css';
import { Container, Grid, List} from 'semantic-ui-react';


const Skills = () => {
    return(
        <Container className='skills-container'>
        <Grid container columns={2} relaxed='very'>
            <Grid.Column textAlign='center' color='teal'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Header>JavaScript</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Python</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Swift</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>React</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>SQL</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>HTML</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>CSS</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Redux</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>MongoDB</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Mongoose</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Express</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Node</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Django</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Flask</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column textAlign='center' color='yellow'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Header>Git</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>GitHub</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Heroku</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>AWS</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>GCP</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>VSCode</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Sublime</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Xcode</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Postman</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Robo 3T</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Chrome</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Slack</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Trello</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
        <Grid container columns={2} relaxed='very'>
            <Grid.Column textAlign='center' color='yellow'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Header>Object Oriented Programming</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Model View Controller</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Test-Driven Development</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Test Automation</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Responsive Design</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Agile</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Lean</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column textAlign='center' color='teal'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Header>Bootstrap</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Semantic UI</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Semantic UI React</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>React Bootstrap</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>POSE</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Masonry</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
        </Container>        
    )
}

export default Skills;
