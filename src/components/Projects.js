import React from 'react';
import { Image, Container, Card, Placeholder, Header} from 'semantic-ui-react';
import jacketERD from '../Images/jacket-pocket-erd.png';
import jacketWire from '../Images/jacket-home.png';
import jacketActual from '../Images/jacket-pocket-live.png';
import beautifyMain from '../Images/beautify-main.png';
import beautifyProducts from '../Images/beautify-products.png';

const contact = () => {
    return(
       <Container className='ui inverted secondary center aligned segment'>
        <Header as='h1'> Jacket-pocket </Header>
{/* Project Number 1 */}
        <Card.Group itemsPerRow={3}>
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
