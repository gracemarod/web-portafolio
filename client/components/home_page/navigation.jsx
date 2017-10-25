import React, { Component } from 'react';
import { Nav, NavItem} from 'react-bootstrap';


class Navbar extends Component {
constructor(props) {
  super(props);
  this.state = {
    key: 1
  };
 this.handleSelect = this.handleSelect.bind(this)
}
handleSelect(key) {
  this.setState({key});
}

	render() {
		return(
		  <Nav className="nav" activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
			    <NavItem eventKey={1} title="Tab 1"><li><a>Home</a></li></NavItem>
			    <NavItem eventKey={2}><li><a>Education</a></li></NavItem>
			    <NavItem eventKey={3}><li><a>Skills</a></li></NavItem>
			    <NavItem eventKey={4}><li><a>Projects</a></li></NavItem>
			    <NavItem eventKey={5}><li><a>Blog</a></li></NavItem>
		 
		  </Nav>
	 )}
}

export default Navbar;
