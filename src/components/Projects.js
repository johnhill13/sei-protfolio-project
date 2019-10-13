import React from 'react';
import { Image, Container, Card, Header} from 'semantic-ui-react';
import jacketERD from '../Images/jacket-pocket-erd.png';
import jacketWire from '../Images/jacket-home.png';
import jacketActual from '../Images/jacket-pocket-live.png';
import beautifyMain from '../Images/beautify-main.png';
import beautifyProducts from '../Images/beautify-products.png';
import './Projects.css';

const contact = () => {
    return(
       <Container className='ui inverted secondary center aligned segment'>
        <Header as='h1'> Jacket-pocket </Header>
{/* Project Number 1 */}
        <Card.Group itemsPerRow={3}>
            <Card.Description>
            Jacket-pocket was a fun, small trivia game where I try to use sockets to play a game between friends, live by sharing a room. Succeeded in accomplishing MVP, working frontend and backend. Failed to implement sockets in time for the due date of the project but I learned a ton. Continuing to fully imagine this game intending to complete and deploy this working 4 person trivia game. Stay tuned! Visit <a className='proj-link' href="https://jacket-pocket.herokuapp.com">Jacket Pocket</a> or take a look at my projects <a className='proj-link' href="https://github.com/johnhill13/jacket-pocket">Github</a>
            </Card.Description>
            <Card>
            <Card.Content>
                <Image src={jacketERD} size='medium' />
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Image src={jacketWire} size='medium' />
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
            <Image src={jacketActual} size='medium' />
            </Card.Content>
            </Card>
        </Card.Group>

{/* Project Number 2 */}
        <Header as='h1'> Beautify </Header>
        <Card.Group itemsPerRow={3}>
            <Card.Description>
                Beautify was a collobrative project between two engineers and myself. We had 5 days to decide upon and then build a full stack e-commerce site. Engineers designed and built a robust backend, cart with the ability to handle stock, pretty URL's, and Stripe payment integration. As a team we successfully acheived the scope we defined and deployed. Please visit our early collaboration <a className='proj-link' href="https://beautify-ecommerce.herokuapp.com">Beautify</a> or take a look at our <a className='proj-link' href="https://github.com/imaekella/Beautify">Github</a>.  Take a moment to look at all the members of our team on the About page.
            </Card.Description>

            <Card>
            <Card.Content>
                <Image src={beautifyMain} size='medium' />
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Image src={beautifyProducts} size='medium' />
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Image src={beautifyProducts} size='medium' />
            </Card.Content>
            </Card>
        </Card.Group>             
      </Container>
    )
}

export default contact;
