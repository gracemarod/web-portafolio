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
		 <div>
		  <Nav bsStyle="pills" activeKey={1} >
		    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
		    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
		    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
		  </Nav>
		 </div>
	 )}
}

export default Navbar;
