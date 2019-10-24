import React, { Component } from 'react';
import "./section4.css"
class Roc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
 <section className="section4">
        <div className="parag5">
         <h1 className="titre4"> We are a global company with local culture</h1>
        </div>
        <div className="parag6">
            <div className="icon1" > 
            <i class="fab fa-diaspora"></i> <span> Znanylekarz</span></div>
            <div className="icon2">
            <i class="fab fa-diaspora"></i><span >Doctoralia</span></div>
            <div className="icon3">
            <i class="fab fa-diaspora"></i> <span >MioDottore</span></div>
            <div className="icon4">
            <i class="fab fa-diaspora"></i> <span >DoktorTavimi</span></div>
            <div className="icon5">
            <i class="fab fa-diaspora"></i> <span >Znamylekar</span></div>
        </div>
    </section>
        </div> );
    }
}
 
export default Roc;
