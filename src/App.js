import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Shopping Cart',
      subtitle: 'Total purchase value:',
      products: [
        {
          image: 'moto.jpg',
          title: 'Te vendo una moto',
          description: 'moto',
          text: 'Te vendo una moto',
          value: 1000,
          currency: '€',
          quantity: 0,
        },
        {
          image: 'coche.jpg',
          title: 'Te vendo un coche',
          description: 'moto',
          text: 'Te vendo un coche',
          value: 1800,
          currency: '€',
          quantity: 0,
        },
        {
          image: 'furgoneta.jpg',
          title: 'Te vendo una furgoneta',
          description: 'moto',
          text: 'Te vendo una furgoneta',
          value: 3500,
          currency: '€',
          quantity: 0,
        }
      ]
    }
  }

  render() {
    const {title, subtitle, products} = this.state;
    return (
      <main>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Lista products={products} />
      </main>
    )
  }
}

class Lista extends React.Component {
  constructor(){
    super();
    this.state = {quantity: 0}
    this.update = this.update.bind(this)
  }

  update(){
    this.setState({quantity: this.state.quantity + 1})

  }

  

  render(){
    const {products} = this.props;
    return(
      <ul>
        {products.map((products, index) => {
          return (
          <li key={index}>
            <img src={products.image} alt={products.description}/>
            {products.title} ||
            {products.text} ||
            <button>-</button> ||
            {this.state.quantity} ||
            <button onClick={this.update}>+</button> ||
            {products.value}
            {products.currency}
            </li>
          )
        })
        }
      </ul>
    )
  }
}

export default App;

/*import PropTypes from 'prop-types';

//const App = () => <h1>Holi, caracoli</h1>

//const App = () => React.createElement('h2', null, 'Soy la segunda prueba')

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      texto: 'Yo tambien tengo gatos'
    }
  }

  render(){
    const {texto} = this.state;
    const {gatos} = this.props;
    return (
        <h1>{texto}, pero no tengo </h1>
    )
  }
}

export default App;
*/


