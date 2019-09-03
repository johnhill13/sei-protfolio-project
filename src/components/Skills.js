import React from 'react';
import { Container, Segment, Grid, List} from 'semantic-ui-react';


const Skills = () => {
    return(
        <Container>
        <Grid columns={2} relaxed='very'>
            <Grid.Column textAlign='center' color='teal'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Header>JavaScript</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Python</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Django</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Flask</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Express</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Node</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Ajax</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Jquery</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>HTML</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>CSS</List.Header>
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
                        <List.Header>Command Line</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Heroku</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>AWS</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
        <Grid columns={2} relaxed='very'>
            <Grid.Column textAlign='center' color='yellow'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Header>SQL</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>noSQL</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Postgres</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>MongoDB</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Mongoose</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Node</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Ajax</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Jquery</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>HTML</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>CSS</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column textAlign='center' color='teal'>
                <List animated verticalAlign='middle'>
                    <List.Item>
                        <List.Header>Git</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>GitHub</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Command Line</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Heroku</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>AWS</List.Header>
                    </List.Item>
                    <List.Item>
                        <List.Header>Git</List.Header>
                    </List.Item>
                </List>
            </Grid.Column>
        </Grid>
        </Container>        
    )
}

export default Skills;
