import React, { Component } from 'react';

// class Q1 extends Component {
//    constructor(){
//     super()
//     this.state={
//         count:0
//     }
//     this.adding=this.adding.bind(this)
//     this.reducing=this.reducing.bind(this)
//    }
//     adding(){
//         this.setState({count:this.state.count+1})
//     }
//     reducing(){
//         this.setState({count:this.state.count-1})
//     }
//     render() { 
//         const {count} =this.state
       
//         return (
//         <div>
//             <span>Number</span>
//             <p>{count}</p>
//             <button onClick={this.adding}>+</button>
//             <button onClick={this.reducing}>-</button>
//         </div>);
//     }
    
// }
 
// export default Q1;

class Q1 extends Component {
    state = { count:0 }
    
    adding = () => {
        this.setState({count:this.state.count +1})
    }
    reducing =()=> {
        this.setState({count:this.state.count -1}) 
    }
    render() { 
        let {count} = this.state
        return (
            <div className='container'>
            <p>Counter</p>
                <p className='box-number'>{count}</p>
                
                    <button onClick={this.adding}>+</button>
                    <button onClick={this.reducing}>-</button>
                
          
     </div>
        );
    }
}
 
export default Q1;
