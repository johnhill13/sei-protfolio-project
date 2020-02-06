import React from "react";
import { Container, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class contact extends React.Component {
  render() {
    return (
      <Container className="ui inverted secondary center aligned segment">
        <a title="GitHub" href="https://github.com/johnhill13">
          <Icon color="black" link name="github" size="huge" />
        </a>
        <a title="LinkedIn" href="https://www.linkedin.com/in/john-hill-engineering">
          <Icon color="black" link name="linkedin" size="huge" />
        </a>
        {/* <Icon link name='mail outline'size='huge'src=''/> */}
        <Router>
          <Link title="Resume" to="/dataFolder/John-Hill-Resume.pdf" target="_blank" download>
            <Icon color="black" link name="user circle" size="huge" />
          </Link>
        </Router>
      </Container>
    );
  }
}

export default contact;
