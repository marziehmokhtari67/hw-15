import React, { Component } from "react";
import './style.css'
class Q2 extends Component {

  state = {
    countries: [
      { id: 1, name: "Iran", capital: "Tehran", flag:'./image/iran.png' },
      { id: 2, name: "Australia", capital: "Canberra", flag:'./image/Australia.png' },
      { id: 3, name: "Armenia", capital: "Yerevan",flag:'./image/armania.png' },
      { id: 4, name: "Belarus", capital: "Minsk", flag:'./image/belarus.png' },
      { id: 5, name: "Brazil", capital: "Brasilia",flag:'./image/brazil.png' },
      { id: 6, name: "Cameroon", capital: "	Yaounde", falg:'./image/cameroon.png' },
      { id: 7, name: "Canada", capital: "Ottawa", flag:'./image/canada.png' },
      { id: 8, name: "Egypt", capital: "Cairo",flag:'./image/egypt.png'  },
      { id: 9, name: " El Salvador", capital: "San Salvador",flag:'./image/El Salvador.png'  },
      { id: 10, name: "Guinea-Bissau", capital: "Bissau",flag:'./image/Guinea-Bissau.png'  },
    ],
  };
  render() {
    const country=this.state.countries
    
    return (<div className="container">
        {country.map((item)=><div className="card">
          <img src= {item.flag}/>
          <p>Name:{item.name}</p>
          <p>Capital:{item.capital}</p>
        </div>)}
       
    </div>);
  }
}

export default Q2;
