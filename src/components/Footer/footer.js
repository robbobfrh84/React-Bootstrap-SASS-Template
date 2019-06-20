import React from "react"
import { Link } from 'react-router-dom'
import { Row, Col, Container, Button } from 'react-bootstrap'
import "./footer.sass"

class Footer extends React.Component {

  state = {
    date: "",
    page: window.location.pathname
  }

  componentDidMount(){
    this.setState({ date: new Date().getFullYear() })
    this.setFooterPosition()
  }

  componentDidUpdate(){
    this.setFooterPosition()
  }

  setFooterPosition(){ // Do some CRAZY stuff to keep footer in place for dynamic data-driven updates.
    const stickyFooter = document.getElementById("sticky-footer")
    stickyFooter.style.position = "fixed"
    const root = document.getElementById("root")
    if (window.innerHeight > root.clientHeight + stickyFooter.clientHeight) {
      stickyFooter.style.position = "fixed"
    } else {
      stickyFooter.style.position = "relative"
    }
  }

  render(){
    return (
      <div  id="sticky-footer" className="footer" style={this.state.style}>

          <div className="button-bar">
            <Container>

              <Row>
                <Col md={3}>
                  <Link to="/home">
                    <Button variant="outline-secondary"> Home </Button>
                  </Link>
                </Col>

                <Col md={3}>
                  <Link to="/page2" >
                    <Button variant="outline-success"> Page 2 </Button>
                  </Link>
                </Col>

                <Col md={3}>
                  <Link to="/theme" >
                    <Button variant="outline-warning"> Theme </Button>
                  </Link>
                </Col>

                <Col md={3}>
                  <Link to="/fullpage" className="full">
                    <Button variant="outline-primary"> Full </Button>
                  </Link>
                </Col>

              </Row>
            </Container>
          </div>

          <p className="text-info copy">
            &copy;{this.state.date} Pair Programmers
          </p>


      </div>
    )
  }

}

export default Footer
