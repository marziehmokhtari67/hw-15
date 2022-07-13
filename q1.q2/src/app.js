import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Q1 from './Question1/Q1'
import Q2 from './Question2/Q2.js';


class APP extends Component {
   
    render() {
        return(
            <div>
               {/* <Q1/> */}
                <Q2/>
            </div>
        )
    
        }  
}
 
export default APP;
