import React from 'react';
import { Image, Container, Card, Placeholder, Header} from 'semantic-ui-react';

const contact = () => {
    return(
       <Container className='ui inverted secondary center aligned segment'>
        <Header as='h1'>Projects</Header>
        <Card.Group itemsPerRow={3}>
            <Card>
            <Card.Content>
                <Placeholder>
                <Placeholder.Image square />
                </Placeholder>
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Placeholder>
                <Placeholder.Image square />
                </Placeholder>
            </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Placeholder>
                <Placeholder.Image square />
                </Placeholder>
            </Card.Content>
            </Card>
        </Card.Group>
      </Container>
    )
}





export default contact;











// <Container className='ui inverted secondary center aligned segment'>
// <Image
//     src='/images/wireframe/image-text.png'
//     as='a'
//     size='medium'
//     href='http://google.com'
//     target='_blank'
// />
// </Container>