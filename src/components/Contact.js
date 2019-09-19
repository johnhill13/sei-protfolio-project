import React from 'react';
import { Container, Icon} from 'semantic-ui-react';

const contact = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
            <Icon link name='github' size='huge' src='https://github.com/johnhill13'/>
            <Icon link name='linkedin' size='huge' src='https://www.linkedin.com/in/john-hill-engineering'/>
            <Icon link name='mail outline'size='huge'src=''/>
            <Icon link name='user circle' size='huge'src=''/>
        </Container>
    )
}

export default contact;


