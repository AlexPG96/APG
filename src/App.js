import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      titulo: 'Shopping Cart',
      subtitulo: 'Total purchase value:'
    }
  }

  render() {
    const {titulo, subtitulo} = this.state;

    return (
      <main>
        <h1>{titulo}</h1>
        <h2>{subtitulo}</h2>
        <Lista />
      </main>
    )
  }
}

class Lista extends React.Component {
  constructor() {
    super();
    this.state = {
      colection: [
        {
          image: 'moto.jpg',
          title: 'Te vendo una moto',
          description: 'moto',
          text: 'description',
          value: '1.000€'
        },
        {
          image: 'coche.jpg',
          title: 'Te vendo un coche',
          text: 'description',
          value: '1.800€'
        },
        {
          image: 'furgoneta.jpg',
          title: 'Te vendo una furgoneta',
          text: 'description',
          value: '3.500€'
        }

      ]
    }
  }
  render() {
    const {colection} = this.state;

    return(
      <ul>
        {colection.map((uno, dos) => {
          return <li key={dos}><img src={uno.image} alt ={uno.description}/>{uno.title}{uno.text}<button>-</button><button>+</button>{uno.value}
          </li>

          <input type="button">-</input>
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


