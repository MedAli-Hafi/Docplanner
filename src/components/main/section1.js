import React, { Component } from 'react';
import "./section1.css"
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
<section className="section1">
<div className="bb">
<img src="https://www.docplanner.com/img/sygnet.png" alt="logo1" className="logo1"/>
<p className="titre">Making the healthcare experience more human</p>
</div>
</section>

        </div> );
    }
}
 
export default Intro;