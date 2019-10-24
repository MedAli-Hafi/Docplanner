import React, { Component } from 'react';
import "./section7.css"
class Voc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
   <section className="section7">
<div className="div7-1">
<img src="https://www.docplanner.com/images/warsaw.png" alt="logo7-1" className="logo7-1"/>

<div className="div7-1-2">
<p className="a1-1"> Warsaw </p>
            <span className="a1-2"> SEE OPENNINGS</span>
</div>
</div>
<div className="div7-2">
<img src="https://www.docplanner.com/images/barcelona.png" alt="logo7-2" className="logo7-2"/>

<div className="div7-2-2">
<p className="a2-1"> Barcelona </p>
            <span className="a2-2"> SEE OPENNINGS</span>
</div>
</div>
<div className="div7-3">
<img src="https://www.docplanner.com/images/istanbul.png" alt="logo7-3" className="logo7-3"/>

<div className="div7-3-3">
<p className="a3-1"> Istanbul </p>
            <span className="a3-2"> SEE OPENNINGS</span>
</div>
</div>
   </section>
     
        </div> );
    }
}
 
export default Voc;
