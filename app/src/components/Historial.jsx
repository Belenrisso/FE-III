import React from "react";
class Historia extends React.Component{
  render(){
    return(
      <div className="recordatorio">
      <h3>Seleccion anterior: {this.props.seleccionPrevia}</h3>
      <h4>Historial de opciones elegidas: </h4>
      <ul>
      {this.props.historial.map(anterior => <li>{anterior}</li>)}
      </ul>
    </div>
    )
  }
}
  

export default Historia;
