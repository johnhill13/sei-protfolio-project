import React from 'react';
import { Container, Icon} from 'semantic-ui-react';

const contact = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
            <Icon link name='github' />
            <Icon link name='linkedin' />
            <Icon link name='mail outline' />
            <Icon link name='user circle' />
        </Container>
    )
}

export default contact;
