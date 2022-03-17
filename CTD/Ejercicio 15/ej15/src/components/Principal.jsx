/* traemos Componente de react, desestructurandolo. */
import React,{Component} from "react"

/* 
EN ESTE COMPONENTE CREAMOS UNA CLASE Y CON LOS METODOS DE ESTA, CAMBIAMOS EL COLOR
DE LA LETRA Y EL FONDO QUE ENTRAN COMO PROPS DESDE APP.JS
TAMBIEN AGREGAMOS EN EL METODO UNA PROPIEDAD MAS AL ESTADO, Y ACCEDEMOS A ELLA
DESDE EL STYLE EN EL RETURN DEL RENDER (PADDING MAS GRANDE).
ESTE METODO SE DESATA CON UN EVENTO ON CLICK.
*/

class Principal extends React.Component{
    /* en el constructor con super nos traemos todos los metodos
    que tenga la super clase padre. Despues los estados. */
    constructor(props){
        super(props)
        this.state={
            color:props.color,
            backgroundColor:props.backgroundColor
        }
        /* opcion 1 */
        this.cambiarColor=this.cambiarColor.bind(this) 
        /*
        opcion 2 
        sin la funcion de la linea 16.
        */
        
    }
    cambiarColor(){
        this.setState({
            color:"blue",
            backgroundColor:"red",
            padding:"30px"
        })
    }
    /* siempre hay que tener un render para una clase. */
    render(){
        
        return(
            /* opcion 1 */
            <h2 onClick={this.cambiarColor} style={{color:this.state.color, backgroundColor:this.state.backgroundColor, padding:this.state.padding}}>Mi titulo h2</h2>
            /* 
            opcion 2 
            <h2 onClick={()=>this.cambiarColor()} style={{color:this.state.color, backgroundColor:this.state.backgroundColor}}>Mi titulo h2</h2>
            */
            
        )
    }
}

export default Principal;
