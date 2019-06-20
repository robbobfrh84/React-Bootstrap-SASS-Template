import React from "react"
import Footer from "../../components/Footer/footer.js"
import { ButtonToolbar, Button } from "react-bootstrap"
import "./theme.sass"

export default function Home(props) {

  return (
      <div className="theme">

        <br /><br />
        <h1 className="text-info">
          {props.rootData.title}
        </h1>
        <br /><br />

        <ButtonToolbar className="justify-content-center">
          <Button variant="primary">Primary</Button> &nbsp;&nbsp;
          <Button variant="secondary">Secondary</Button> &nbsp;&nbsp;
          <Button variant="success">Success</Button> &nbsp;&nbsp;
          <Button variant="warning">Warning</Button> &nbsp;&nbsp;
          <Button variant="danger">Danger</Button> &nbsp;&nbsp;
          <Button variant="info">Info</Button> &nbsp;&nbsp;
          <Button variant="light">Light</Button> &nbsp;&nbsp;
          <Button variant="dark">Dark</Button> &nbsp;&nbsp;
          <Button variant="link">Link</Button> &nbsp;&nbsp;
        </ButtonToolbar>
        <br /><br />

        <ButtonToolbar className="justify-content-center">
          <Button variant="outline-primary">Primary</Button> &nbsp;&nbsp;
          <Button variant="outline-secondary">Secondary</Button> &nbsp;&nbsp;
          <Button variant="outline-success">Success</Button> &nbsp;&nbsp;
          <Button variant="outline-warning">Warning</Button> &nbsp;&nbsp;
          <Button variant="outline-danger">Danger</Button> &nbsp;&nbsp;
          <Button variant="outline-info">Info</Button> &nbsp;&nbsp;
          <Button variant="outline-light">Light</Button> &nbsp;&nbsp;
          <Button variant="outline-dark">Dark</Button> &nbsp;&nbsp;
          <Button variant="outline-link">Link</Button> &nbsp;&nbsp;
        </ButtonToolbar>

        <Footer />

      </div>
  );
}
