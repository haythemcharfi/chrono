import React, { Component } from 'react';
class Chrono extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time:0,
              On:false
         }
    }
    settime = (num) => {
        var h = Math.floor(num / 3600)
        var m = Math.floor((num % 3600) / 60)
        var s = ((num % 3600) % 60)
        return (
          <div className="tot1">
            <span>{h.toString().padStart(2,0)}:</span>
            <span>{m.toString().padStart(2,0)}:</span>
            <span>{s.toString().padStart(2,0)}</span>
          </div>
        )
       }
    start=()=>{
        this.setState({
            On:true
        })
        this.interval= setInterval(() => {
          this.setState({
                time:this.state.time+1
            })
            
        }, 1000);

   
    }
    
    reset=()=>{
        clearInterval(this.interval)
            this.setState({
                time:0
            })
        }
        pause=()=>{
   
            clearInterval(this.interval)
            this.setState({
                On:false
            })
            
        }
    
    render() { 
        return (<div className="total">
            {this.settime(this.state.time)}
            <span>hour minuter second</span>
            
            <button onClick={!this.state.On?this.start:this.pause}>start</button>
            <button onClick={this.reset}>reset</button>
            </div>
         );
    }
}
 
export default Chrono;