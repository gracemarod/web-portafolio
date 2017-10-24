import React from 'react';
import ReactDOM from 'react-dom';

import{
	BrowserRouter as Router,
	Route,
	link
} from 'react-router-dom'

import Index from './index';

Meteor.startup(() => {
	ReactDOM.render(
		<Index />,
		document.querySelector('.app-container')
	);
});