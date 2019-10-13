import React from 'react';
import { Container, Divider, Button, Form} from 'semantic-ui-react';

const form = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
            <Form action='https://formspree.io/hillxjohn@gmail.com' method='POST' size='tiny' key='tiny'>
                <Form.Group widths='equal'>
                    <Form.Field
                        label="Share your Email if you wish to connect."
                        control='input'
                        placeholder='Your Email'
                        type='email'
                        name='_replyto'
                    />
                </Form.Group>
            <Button type='submit' value='Send'>Submit</Button>
            <Divider hidden />
            </Form>

        </Container>
    )
}

export default form;
