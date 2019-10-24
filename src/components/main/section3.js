import React, { Component } from 'react'
import "./section3.css"
class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div  >
            <section className="section3">
                <div className="qq">
                    <div className="parag3"> <span className="span1"> For patients </span>
                    <p className="titre2"> Find a doctor, book a visit and solve any health-related doubt</p>
  
                    <div className="ee">
                    <select name="" id="" className="btn">
                        <option value="xx">CHOOSE COUNTRY</option>
                        <option value="xx">ARGENTINA</option>
                        <option value="xx">AUTRALIA</option>
                        <option value="xx">BRAZIL</option>
                        <option value="xx">CHILE</option>
                        <option value="xx">COLOMBIA</option>
                        <option value="xx">CZECH</option>
                        <option value="xx">FRANCE</option>
                        <option value="xx">ITALY</option>
                        <option value="xx">MEXICO</option>
                        <option value="xx">PERY</option>
                        <option value="xx">POLAND</option>
                        <option value="xx">SPAIN</option>
                        <option value="xx">TURKEY</option>
                        <option value="xx">UK</option>
                    </select>


<div className="image-div">
<img  src="https://www.docplanner.com/img/screen-marketplace@2x.png" alt="logo2" className="logo2" /></div>

</div>
                    </div>
                </div>
                <div className="parag4"> <span className="span2"> For doctors </span>
                    <p className="titre3">Save time managing visits and cut no-shows by half</p>
<div className="image-div2">
                    <img src="https://www.docplanner.com/img/screen-saas@2x.png" alt="logo3" className="logo3" />
                    </div>
                    
                </div>
            </section>
        </div>);
    }
}

export default Doc;