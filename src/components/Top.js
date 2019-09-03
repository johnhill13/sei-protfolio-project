import React from 'react';
import { Container, Card} from 'semantic-ui-react';

import Top from './Top.css';

const top = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
           <Card
                centered
                header='John Hill'
                meta=' Fullstack Software Engineer'
            />
        </Container>
    )
}





export default top;
