import React, {Component} from 'react';

class Calculator extends Component{
    constructor(props){
        super(props);

        this.state ={height: ''};
        this.state ={weight: ''};
    }
    render(){
        return(
            <div className="text-center">
                <div>
                Podaj wzrost
                    <input 
                    value = {this.state.height}
                    onChange={event=>this.setState({height:event.target.value})} />
                </div>
                <div>
                Podaj wage
                    <input  
                    value = {this.state.weight}
                    onChange={event=>this.setState({weight:event.target.value})}/>
                </div>
                <div>
                Wynik
                <input value ={cal(this.state.weight,this.state.height)}/>
                </div>
            </div>
        );
    }   
    
    
}
function cal(param1, param2){
    return param1/(param2*2);
}


export default Calculator;