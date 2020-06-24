import React from "react";
import { Container, Button, Form } from "semantic-ui-react";
import "./Form.css";

const form = () => {
  return (
    <Container className="ui inverted secondary segment">
      <Form
        action="https://formspree.io/hillxjohn@gmail.com"
        method="POST"
        size="medium"
        key="medium"
        id="fs-frm"
        className="simple-contact-form"
        accept-charset="utf-8"
      >
        <Form.Group>
          <h3 className="share-info">
            Please share your info below and I will reach out to you directly.
          </h3>
          <Form.Input
            fluid
            type="text"
            placeholder="Full Name"
            name="name"
            className="name-input"
          />
          <Form.Input
            fluid
            placeholder="Email Address"
            type="email"
            name="_replyto"
            className="email-input"
          />
          <Form.Input
            fluid
            id="message"
            placeholder="Comment to John."
            type="text"
            rows="3"
            name="message"
            className="message-input"
          />
          <Button type="submit" value="Send" size="tiny">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default form;

{
  /* <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/YOUR_EMAIL_HERE" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus." required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Submit">
</form> */
}
