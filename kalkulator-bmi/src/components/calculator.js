import React, {Component} from 'react';

class Calculator extends Component{
    constructor(props){
        super(props);

        this.state ={height: ''};
        this.state ={weight: ''};
        this.state = {result:''};
    }
    render(){
        return(
            <div className="text-center">
            <div className="row">
                <div className="col-md-2 offset-md-4">
                    <div> Podaj wzrost</div>
                </div>
                <div className="col-md-2">
                    <input 
                    value = {this.state.height}
                    onChange={event=>this.setState({height:event.target.value})} />
                </div>
                </div>
            <div className="row">
                <div className="col-md-2 offset-md-4">
                Podaj wage
                </div>
                <div className="col-md-2">
                    <input  
                    value = {this.state.weight}
                    onChange={event=>this.setState({weight:event.target.value})}/>
                </div>
                </div>
                <div>
            </div>
            <div className="row">
                <div className="col-md-2 offset-md-4">
                Wynik
                </div>
                <div class="col-md-2">
                <input value ={cal(this.state.weight,this.state.height)}/>
                </div>
                </div>
                
            </div>
        );
    }   
    
    
}
function cal(weight, height){
    if(height > 2.5){
        height=height/100;
    }
    if(height!== undefined && weight!== undefined){
        return weight/(height*2);
    }
}




export default Calculator;