import { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headr from "./Compontents/Header/Header";
import Home from "./Compontents/Home/Home";

class App extends Component {
  state = {
    products: [
      { id: 0, name: "shipcy", price: 100, items: 10 },
      { id: 1, name: "molto", price: 200, items: 20 },
      { id: 2, name: "Krispy", price: 300, items: 30 },
      { id: 3, name: "pepci", price: 400, items: 40 },
      { id: 4, name: "coca", price: 500, items: 50 },
    ],
  };

  //Functions
  increment = (data) => {
    const increProducts = this.state.products.map((product) => {
      if (product.id === data.id) {
        product.items++;
      }
      return product;
    });
    this.setState({
      products: increProducts,
    });
  };

  decrement = (data) => {
    const decreProducts = this.state.products
      .map((product) => {
        if (product.id === data.id) {
          product.items > 0 && product.items--;
        }
        return product;
      })
      .filter((product) => product.items > 0);

    this.setState({
      products: decreProducts,
    });
  };

  delete = (data) => {
    const deleteProducts = this.state.products.filter((product) => {
      return product.id !== data.id;
    });
    this.setState({
       products: deleteProducts     
    });
  };
  reset = () => {
    const resetProducts = this.state.products.map((product) => {
      product.items = 0;
      return product;
    });
    this.setState({
      products: resetProducts,
    });
  };
 
  render() {
    return (
      <>
        <Headr reset={this.reset} />
        <Home
          products={this.state.products}
          increment={this.increment}
          decrement={this.decrement}
          delete={this.delete}
          reset={this.reset}
        />
      </>
    );
  }
}
export default App;
