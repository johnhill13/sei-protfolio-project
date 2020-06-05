import React from "react";
import { Container, Icon, Grid } from "semantic-ui-react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Contact.css";

class contact extends React.Component {
  render() {
    return (
      <Container className="ui inverted secondary center aligned segment">
        <div class="contact-links">
          <a title="GitHub" href="https://github.com/johnhill13">
            <Icon color="black" link name="github" size="huge" />
          </a>
          <p className="name">GitHub</p>
        </div>
        {/* this is for the next one */}
        <div class="contact-links">
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/john-hill-engineering"
          >
            <Icon color="black" link name="linkedin" size="huge" />
          </a>
          <p className="name">LinkedIn</p>
        </div>
        {/* this is for the one after the next one */}
        <div class="contact-links">
          <Router>
            <Link
              title="Resume"
              to="/dataFolder/John-Hill-Resume.pdf"
              target="_blank"
              download
            >
              <Icon color="black" link name="user circle" size="huge" />
            </Link>
            <p className="name">Resume</p>
          </Router>
        </div>
      </Container>
    );
  }
}

export default contact;
