import React, { Component } from 'react'
import data from "./data.json"
import Button from "./Button";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import Ul from './Ul';

class Div extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: data,
      text: data[0].historia,
      choiceA: data[0].opciones.a,
      choiceB: data[0].opciones.b,
      contador: 0,
      selection: "",
      prevSelection: "",
      historial:[]
    }

    this.selection=this.selection.bind(this)
    this.updateChoice=this.updateChoice.bind(this)

  }

  componentDidMount(){
    
  }

  
  selection = (date) => {
    this.setState({
      selection: date,
      contador:this.state.contador+1,
      historial:[...this.state.historial,date]
    })
    
    this.updateHistory()
  }

  componentDidMount(){
    
  }

  componentDidUpdate(prevProps, prevState){
     
  }

  componentWillUnmount(){
    
  }

  updateHistory = () => {
    
    switch (this.state.contador) {
      case 1:
        this.stageTwo()
        console.log("stage 2 switch");
        break;
      case 2:
        this.stageThree()
        
        break;
      case 3:
        this.stageFour()
        
        break;
      case 4:
        this.stageFive()
        
        break;
      default:
        break;
    }
  }
  

  stageTwo = () => {
    console.log(this.state.selection+"1");
    if (this.state.selection === "A") {
      console.log(this.state.selection)
      this.setState({
        text: this.state.data[1].historia,
        prevSelection: "A",       
      })
      console.log(this.state.selection+"A")
      
    } else if (this.state.selection === "B") {
      console.log(this.state.selection+"B")
      this.setState({
        text: this.state.data[2].historia,
        prevSelection: "B",
      })
      console.log(this.state.selection+"B")
      
    }
    console.log(this.state.text);
    this.updateChoice()
    console.log(this.state.selection)
  }

  stageThree = () => {
    if (this.state.selection === "A") {
      this.setState({
        text: this.state.data[3].historia,
        prevSelection: "A",
      })
    } else if (this.state.selection === "B") {
      this.setState({
        text: this.state.data[4].historia,
        prevSelection: "B",
        
      })
    }
    this.updateChoice()
  }

  stageFour = () => {
    if (this.state.selection === "A") {
      this.setState({
        text: this.state.data[5].historia,
        prevSelection: "A",
        
      })
    } else if (this.state.selection === "B") {
      this.setState({
        text: this.state.data[6].historia,
        prevSelection: "B",
        
      })
    }
    this.updateChoice()
  }

  stageFive = () => {
    if (this.state.selection === "A") {
      this.setState({
        text: this.state.data[7].historia,
        prevSelection: "A",
        
      })
    } else if (this.state.selection === "B") {
      this.setState({
        text: this.state.data[8].historia,
        prevSelection: "B",
        
      })
    }
    this.updateChoice()
  }

  updateChoice = () => {
    this.setState({
      choiceA: data[this.state.contador].opciones.a,
      choiceB: data[this.state.contador].opciones.b
    })
  }

  render() {
    return (
      <div className='layout'>
        <H1 text={this.state.text} />
        <div className="opciones">
          <div className="opcion">
            <Button id="A" text="A" changeSelection={this.selection}/>
            <H2 text={this.state.choiceA} />
          </div>
          <div className="opcion">
            <Button id="B" text="B" changeSelection={this.selection} />
            <H2 text={this.state.choiceB} />
          </div>
        </div>
        <div className="recordatorio">
          <H3 text="Sección anterior:" eleccionAnterior={this.state.prevSelection}/>
          <H4 text="Historial de opciones elegidas:" historial={this.state.historial} />
          <Ul historial={this.state.historial}/>
        </div>
      </div>
    )
  }
}

export default Div; 