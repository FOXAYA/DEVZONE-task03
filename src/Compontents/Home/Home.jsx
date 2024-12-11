import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Home extends Component {
  render() {
    const { products, decrement,increment } = this.props;

    return (
      <div className="d-flex flex-column gap-4 m-4 product text-upperCase">
        {products.length > 0 ? (
          products.map((data, i) => (
            <div key={i} className="d-flex gap-1 ms-3">
              <h1>
                {i} <span> - </span>
              </h1>
              <h1>
                <span>Name : </span>
                {data.name}
              </h1>
              <h1>
                <span>Price : </span>
                {data.price}
              </h1>
              <h1>
                <span>Items : </span>
                {data.items}
              </h1>
              <div className="d-flex gap-2 ms-2">
                <Button variant="warning" onClick={() => increment(data)}>
                  Increment
                </Button>
                <Button variant="success" onClick={() => decrement(data)}>
                  Decrement
                </Button>
                <Button variant="warning" onClick={() =>  this.props.delete(data)}>
                  Delete
                </Button>
              </div>
              <h2 className="total">
                total price = <span>{data.price * data.items}</span>
              </h2>
            </div>
          ))
        ) : (
          <h1 className="text-center text-black">Empty Cards</h1>
        )}
      </div>
    );
  }
}

export default Home;
