import React from "react";
import { Image, Container, Card, Header } from "semantic-ui-react";
import jacketERD from "../Images/jacket-pocket-erd.png";
import jacketWire from "../Images/jacket-home.png";
import jacketActual from "../Images/jacket-pocket-live.png";
import beautifyMain from "../Images/beautify-main.png";
import beautifyProducts from "../Images/beautify-products.png";
import photouploaderSignin from "../Images/photouploader-signin.png"
import photouploaderAlbums from "../Images/photouploader-albums.png"
import "./Projects.css";

const projects = () => {
  return (
    <Container className="ui inverted secondary center aligned segment">
      {/* Project Number 1 */}
      <Header as="h1"> Photo Album Uploader POC </Header>
      <Card.Group itemsPerRow={3}>
        <Card.Description>
          Photo Album Uploader utilizing AWS Amplify, React, GraphQL, DynamoDB. AWS Lambda
          to create thumbnails of images when uploaded to the album{" "}
          <a
            className="proj-link"
            href="https://master.d3or6g43vjv1z5.amplifyapp.com"
          >
            Photo Uploader
          </a>
          ; take a look at
          <a
            className="proj-link"
            href="https://github.com/johnhill13/photo-album-uploader"
          >
            {" "}
            Github
          </a>
          . I built this POC in order to verify my understanding before
          implementing an uploader for a photography client. I learned/verified
          what I needed to- checking my understanding along the way before
          embarking on the official build. Followed online articles outlining abilites of Amazons technology. Awesome project which touched on many available features. 
        </Card.Description>

        <Card>
          <Card.Content>
            <Image src={photouploaderSignin} size="medium" />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image src={photouploaderAlbums} size="medium" />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image src={""} size="medium" />
          </Card.Content>
        </Card>
      </Card.Group>

      <Header as="h1"> Jacket-pocket </Header>
      {/* Project Number 1 */}
      <Card.Group itemsPerRow={3}>
        <Card.Description>
          Jacket-pocket was a fun, small trivia game where I try to use sockets
          to play a game between friends live by sharing the room. Succeeded in
          accomplishing MVP, working frontend and backend. Failed to implement
          sockets for submission. Plan to fully imagine this game; intending to complete and deploy
          this working trivia game. Stay tuned! Visit{" "}
          <a className="proj-link" href="https://jacket-pocket.herokuapp.com">
            Jacket Pocket
          </a>{" "}
          or take a look at my projects{" "}
          <a
            className="proj-link"
            href="https://github.com/johnhill13/jacket-pocket"
          >
            {" "}
            Github
          </a>
        </Card.Description>
        <Card>
          <Card.Content>
            <Image src={jacketERD} size="medium" />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image src={jacketWire} size="medium" />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image src={jacketActual} size="medium" />
          </Card.Content>
        </Card>
      </Card.Group>

      {/* Project Number 2 */}
      <Header as="h1"> Beautify </Header>
      <Card.Group itemsPerRow={3}>
        <Card.Description>
          Beautify was a collobrative project between two engineers and myself.
          In 5 days we decided upon and "built" a full stack e-commerce site.
          Engineering and designing a robust backend, cart with the ability to
          handle/edit stock, pretty URL's for easy navigation, and Stripe
          payment integration. Successfully acheived the scope we defined and
          deployed the App in the time we determined. Please visit our early
          collaboration
          <a
            className="proj-link"
            href="https://beautify-ecommerce.herokuapp.com"
          >
            Beautify
          </a>
          or take a look at our
          <a className="proj-link" href="https://github.com/imaekella/Beautify">
            Github
          </a>
          . If you have a moment, take a look at all the members of our team via
          the About page.
        </Card.Description>

        <Card>
          <Card.Content>
            <Image src={beautifyMain} size="medium" />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image src={beautifyProducts} size="medium" />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Image src={beautifyProducts} size="medium" />
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
  );
};

export default projects;
