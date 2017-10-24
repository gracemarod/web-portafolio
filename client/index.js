import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import App from './app';

const Index = () =>{
	return(
		<Router>
			<div>
				<Route exact path="/" component={App}/> 
			</div>
		</Router>
		);
};

export default Index;