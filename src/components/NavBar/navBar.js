import React from "react"
import { Link } from "react-router-dom"
import "./navBar.sass"
import { Navbar, Nav, Button } from 'react-bootstrap'

export default function NavBarX(props) {

  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand>
        <Link to="/" className="title"> {props.title} </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>

          <Link to="/home">
            <Button variant="outline-secondary"> Home </Button>
          </Link>

          <Link to="/page2" >
            <Button variant="outline-success"> Page 2 </Button>
          </Link>

          <Link to="/theme" >
            <Button variant="outline-warning"> Theme </Button>
          </Link>

          <Link to="/fullpage" className="full">
            <Button variant="primary"> Full </Button>
          </Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )

}
