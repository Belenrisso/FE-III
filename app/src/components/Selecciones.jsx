import React from "react";

class Selecciones extends React.Component {
  render() {
    return (
      <>
        <div className="opciones">
          <div className="opcion">
            <button
              className="botones"
              id="A"
              onClick={(e) => this.props.handleClick(e)}
            >
              A
            </button>
            <h2>{this.props.opcionA}</h2>
          </div>
          <div className="opcion">
            <button
              className="botones"
              id="B"
              onClick={(e) => this.props.handleClick(e)}
            >
              B
            </button>
            <h2>{this.props.opcionB}</h2>
          </div>
        </div>
      </>
    );
  
  }
}
export default Selecciones;
