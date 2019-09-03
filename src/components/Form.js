import React from 'react';
import { Container, Icon} from 'semantic-ui-react';

const form = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
                ADD EMAIL CONTACT BELOW INSIDE  HERE
            
            <form action="https://formspree.io/johnnyhill13@gmail.com.tld" method="POST" />
            
            <input type="text" name="name"></input>

        </Container>
    )
}

export default form;
