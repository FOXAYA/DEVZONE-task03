import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ThemeIcon from '../TopButtons/Darkmood'

class TopButtons extends Component {
  render() {
    const { products, add, empty, reset } = this.props;
    return (
      <div>
        {products.length > 0 ? (
          <div className="mt-4 d-flex gap-4 justify-content-center text-uppercase">
          <ThemeIcon />
            <Button
              variant="warning"
              onClick={() =>
                add({
                  name: "product",
                  price: 20, 
                  items: 2, 
                })
              }
            >
              Add Item
            </Button>
            <Button variant="warning" onClick={empty}>
              Empty Cart
            </Button>
            <Button variant="warning" onClick={reset}>
              Reset Cart
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TopButtons;
