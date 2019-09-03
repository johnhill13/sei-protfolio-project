import React from 'react';
import { Image, Container} from 'semantic-ui-react';

const contact = () => {
    return(
        <Container className='ui inverted secondary center aligned segment'>
            <Image
                src='/images/wireframe/image-text.png'
                as='a'
                size='medium'
                href='http://google.com'
                target='_blank'
            />
        </Container>
    )
}





export default contact;
