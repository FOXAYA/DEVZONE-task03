import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { MdOutlineShoppingBasket } from "react-icons/md";
import Topbuttons from "../TopButtons/TopButtons";

class Headr extends Component {
  render() {
    const { products, add, empty, reset } = this.props;
    return (
          <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Shoping Card</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">
                  <MdOutlineShoppingBasket className="text-black ml-2" />
                  <span>0</span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Topbuttons
          reset={reset}
          empty={empty}
          add={add}
          products={products}
        />
      </>
    );
  }
}
export default Headr;
