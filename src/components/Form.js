import React from "react";
import {
  Container,
  Divider,
  Button,
  Form,
  Grid,
  Input
} from "semantic-ui-react";
import "./Form.css";

const form = () => {
  return (
    <Container className="ui inverted secondary segment">
      <Form
        action="https://formspree.io/hillxjohn@gmail.com"
        method="POST"
        size="medium"
        key="medium"
      >
          <h3>Please share your email below and I will reach out directly.</h3>
        <Input
        //   label="Share your Email if you wish to connect."
          control="input"
          placeholder="Your Email"
          type="email"
          name="_replyto"
          className="email-input"
        />
      </Form>
      <Button type="submit" value="Send" size="tiny">
        Submit
      </Button>
    </Container>
  );
};

export default form;
