import React, { Component } from 'react';
import"./section8.css"
class Foc extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
  <section className="section8">
<div className="div8-1">
<img src="https://www.docplanner.com/images/rome.png" alt="logo8-1" className="logo8-1"/>

<div className="div8-1-2">
<p className="a1-1">  Rome</p>
            <span className="a1-2"> SEE OPENNINGS</span>
</div>
</div>
<div className="div8-2">
<img src="https://www.docplanner.com/images/mexico-city.png" alt="logo8-2" className="logo8-2"/>

<div className="div8-2-2">
<p className="a2-1"> Mexico City </p>
            <span className="a2-2"> SEE OPENNINGS</span>
</div>
</div>
<div className="div8-3">
<img src="https://www.docplanner.com/images/curitiba.png" alt="logo8-3" className="logo8-3"/>

<div className="div8-3-3">
<p className="a3-1"> Curitiba </p>
            <span className="a3-2"> SEE OPENNINGS</span>
</div>
</div>
   </section>
        </div> );
    }
}
 
export default Foc;
