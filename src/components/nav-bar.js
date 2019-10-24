import React, { Component } from 'react';
import "./nav-bar.css"
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="nav-bar">
<img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="logo"
className="logo"/>
     <ul className="ul-menu">
                <li > <a className="li-items1" href="https://www.docplanner.com/about-us">About us </a> </li>
                <li > <a className="li-items2" href="https://www.docplanner.com/career">Career</a>  </li>
                <li className="li-items3"> Departements 
                    <div className="dropdowns">
                        <a href="https://www.docplanner.com/department?dep=marketing" > Marketing & PR </a>
                        <a href="https://www.docplanner.com/department?dep=customer" > Customer Succes & Sales  </a>
                        <a href="https://www.docplanner.com/department?dep=it" > IT, Product , Design & UX</a>
                        <a href="https://www.docplanner.com/department?dep=finance" > Finance & Administration </a>
                        <a href="https://www.docplanner.com/department?dep=hr" > HR & more </a>
                    </div>
                </li>
            </ul>
            
        </div> );
    }
}
 
export default Nav;