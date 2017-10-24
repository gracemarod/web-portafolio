import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Nav, NavItem} from 'react-bootstrap';


function handleSelect(selectedKey) {
  alert('selected ' + selectedKey);
}

class Navbar extends Component {


	render() {
		return(
		  <Nav className="navbar" >
		  	<div className="container-fluid">
			    <NavItem className="navitem" eventKey={1} >Home</NavItem>
			    <NavItem className="navitem" eventKey={2} >Education</NavItem>
			    <NavItem className="navitem" eventKey={3} >Skills</NavItem>
			    <NavItem className="navitem" eventKey={4} >Projects</NavItem>
			    <NavItem className="navitem" eventKey={5} >Blog</NavItem>
		 	</div>
		  </Nav>
	 )}
}

export default Navbar;
