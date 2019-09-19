import React from 'react';
import { Container, Grid, Button, Form} from 'semantic-ui-react';

const form = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
            <Grid centered columns={2}>
                <Grid.Column>
                    <Form>
                        <Form.Input className='ui center' label='Enter your email' name="email"  placeholder='email'/>
                    </Form>
                    <Button> Submit </Button>
                </Grid.Column>
            </Grid>

        </Container>
    )
}

export default form;

