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
          image: '',
          title: 'Te vendo una moto',
          text: 'descripcion',
          value: '1.000€'
        },
        {
          image: '',
          title: 'Te vendo un coche',
          text: 'descripcion',
          value: '1.800€'
        },
        {
          image: '',
          title: 'Te vendo una furgoneta',
          text: 'descripcion',
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
          return <li key={dos}>{uno.image}{uno.title}{uno.text}{uno.value}</li>
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

/*
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      texto: 'Yo tambien tengo gatos',
    }
    // this.actualizar = this.actualizar.bind(this)
  }
  // actualizar( evento ) {
  actualizar = (evento) => {
    console.log(evento.target.value)
    this.setState({texto: evento.target.value})
  }
  render(){
    const {texto} = this.state;
    return (
      <>
        <Titulo txt={texto}/>
        <Input cambiaElEstado={this.actualizar}/>
        <Lista />
      </>
    )
  }
}
class Lista extends React.Component {
  constructor() {
    super();
      this.state = {
        coleccion: [
          {nombre: 'El nombre de la Rosa'},
          {nombre: 'Pinocho'},
          {nombre: 'Kamasutra'},
          {nombre: 'El cantar de los cantares'},
        ]
      }
  }
  render() {
    const {coleccion} = this.state;
    return (
      <ul>
        {coleccion.map((libro, index) => {
          return <li key={index}>{libro.nombre}</li>
        })}
      </ul>
    )
  }
}
class Input extends React.Component {
  render() {
    const {cambiaElEstado} = this.props;
    return (
      <input type="text" onChange={cambiaElEstado} />
    )
  }
}
class Titulo extends React.Component {
  render() {
    const {txt} = this.props
    return (
      <h1>{txt}</h1>
    )
  }
}
*/

