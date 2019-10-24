import React, { Component } from 'react'
import Intro from "./section1"
import Boc from "./section2"
import Doc from "./section3"
import Roc from "./section4"
import Wor from "./section5"
import Qoc from "./section6"
import Voc from "./section7"
import Foc from "./section8"
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Intro/>
                <Boc/>
                <Doc/>
                <Roc/>
                <Wor/>
                <Qoc/>
               <Voc/>
               <Foc/>
            </div>
         );
    }
}
 
export default Main;