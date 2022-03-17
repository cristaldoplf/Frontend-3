import React, { Component } from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>Soy un contador Hijo que herda props del padre : {props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000)
    }
    render() {
        return (
            <div>
                <h2>Soy un State</h2>
                <p>Contador: {this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}