import React from 'react';
import { Container, Icon} from 'semantic-ui-react';

const contact = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
            <Icon link name='github' size='huge' src='https://www.google.com'/>
            <Icon link name='linkedin' size='huge'/>
            <Icon link name='mail outline'size='huge'/>
            <Icon link name='user circle' size='huge'/>
        </Container>
    )
}

export default contact;
