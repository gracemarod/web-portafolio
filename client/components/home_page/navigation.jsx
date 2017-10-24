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
		  <Nav className="nav" >
		  	<ul>
			    <NavItem className="navitem" eventKey={1}><li><a>Home</a></li></NavItem>
			    <NavItem className="navitem" eventKey={2}><li><a>Education</a></li></NavItem>
			    <NavItem className="navitem" eventKey={3}><li><a>Skills</a></li></NavItem>
			    <NavItem className="navitem" eventKey={4}><li><a>Projects</a></li></NavItem>
			    <NavItem className="navitem" eventKey={5}><li><a>Blog</a></li></NavItem>
		 	</ul>
		  </Nav>
	 )}
}

export default Navbar;
