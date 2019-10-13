import React from 'react';
import { Container, Icon} from 'semantic-ui-react';

const contact = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
            <a href="https://github.com/johnhill13"><Icon color='black' link name='github' size='huge'/></a>
            <a href="https://www.linkedin.com/in/john-hill-engineering"><Icon color='black' link name='linkedin' size='huge'/></a>
            {/* <Icon link name='mail outline'size='huge'src=''/> */}
            <Icon color='black' link name='user circle' size='huge'/>
        </Container>
    )
}

export default contact;
