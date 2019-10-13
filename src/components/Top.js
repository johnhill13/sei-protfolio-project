import React from 'react';
import { Container, Card} from 'semantic-ui-react';
import './Top.css';

const top = () => {
    return(
        <Container className='ui inverted secondary center aligned segment' id='top-card-background'>
           <Card
                centered
                header='John Hill'
                meta='Software Engineer'
            />
        </Container>
    )
}





export default top;
