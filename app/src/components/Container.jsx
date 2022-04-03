import React, { Component } from "react";
import data from "./data.json";
import Historial from "./Historial";
import Selecciones from "./Selecciones";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      historial:[],
      seleccionPrevia: "",
    };
    this.handleClick = this.nuevoEstado;
  }

  proximaHistoria() {
    if (this.state.contador === 0) {
      return data[0];
    } else {
      let siguiente = `${
        this.state.contador + 1
      }${this.state.seleccionPrevia.toLowerCase()}`;
      let siguienteHistoria = data.filter((d) => {
        return d.id === siguiente;
      });
      return siguienteHistoria[0];
    }
  }

  nuevoEstado = (e) => {
    let historialArray = this.state.historial;
    if (this.state.contador < 5) {
      this.setState({
        contador: this.state.contador + 1,
        historial: historialArray,
        seleccionPrevia: e.target.id,
      });
      if (this.state.seleccionPrevia !== "" && this.state.contador < 4) {
        historialArray.push(this.state.seleccionPrevia);
      }
    }
  };

  render() {
    if (this.state.contador > 4) {
      alert("Fin.");
      let final = `${
        this.state.contador
      }${this.state.seleccionPrevia.toLowerCase()}`;
      let ultimaHistoria = data.filter((dato) => dato.id === final);
      return (
        <div className="layout">
          <h1 className="historia">{ultimaHistoria[0].historia}</h1>
          <Selecciones
            handleClick={this.handleClick}
            opcionA={ultimaHistoria[0].opciones.b}
            opcionB={ultimaHistoria[0].opciones.b}
          />
          <Historial
            historial={this.state.historial}
            seleccionPrevia={this.state.seleccionPrevia}
          />
        </div>
      );
    }
    return (
      <div className="layout">
        <h1 className="historia">{this.proximaHistoria().historia}</h1>
        <Selecciones
          handleClick={this.handleClick}
          opcionA={this.proximaHistoria().opciones.a}
          opcionB={this.proximaHistoria().opciones.b}
        />
        <Historial
          seleccionPrevia={this.state.seleccionPrevia}
          historial={this.state.historial}
        />
      </div>
    );
  }
}

export default Container;
