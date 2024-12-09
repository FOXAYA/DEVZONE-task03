import { Component } from "react";
import Button from "react-bootstrap/Button";
import { MdLightMode } from "react-icons/md";

class Topbuttons extends Component {
  render() {
    return (
      <div className="d-flex gap-4 justify-content-center text-upperCase">
        <MdLightMode className="icon-b" />
        <Button variant="warning">Empty Card</Button>
        <Button variant="warning" onClick={() => this.props.reset()}>
          Reset Card
        </Button>
      </div>
    );
  }
}
export default Topbuttons;
