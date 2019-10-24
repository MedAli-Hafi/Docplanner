import React, { Component } from 'react';
import "./section5.css"
class Wor extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
<section className="section5">
<div className="div1-1">
    <p className="aa">The world's
biggest healthcare platform</p>
<p className="zz">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
</div>
<div className="azeq" >
<div className="paerty paerty1">
    <div className="div3-2">
<img src="https://www.docplanner.com/img/flag.png" alt="logo1-2" className="logo1-2"/>
<p className="p1-2-1">Leader in 10 countries</p>
<p className="p1-2-2">Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</p>
</div>
<div className="div3-2">
<img src="https://www.docplanner.com/img/visits.png" alt="logo2-2" className="logo2-2"/>
<p className="p2-2-1">1.5 million appointments</p>
<p className="p2-2-2">booked last month</p>
</div>
</div>
<div  className="paerty">
<div className="div3-2">
<img src="https://www.docplanner.com/img/patients.png" alt="logo3-2" className="logo3-2"/>
<p className="p3-2-1">30 million unique patients</p>
<br/>
<p className="p3-2-2">visit us every month</p>
</div>
<div className="div3-2">
<img src="https://www.docplanner.com/img/doctors.png" alt="logo4-2" className="logo4-2"/>
<p className="p4-2-1">2 million active doctors</p>
<p className="p4-2-2">trust in our solutions</p>
</div>
</div>
</div>
</section>
        </div> );
    }
}
 
export default Wor;