var selectors = require('./utils/selectors');

var React = require('react');
var ReactState = require('abyssa/src/addon/ReactState')(selectors.main);
var Abyssa = require('abyssa/target/abyssa.min');
var Router = Abyssa.Router;

var App = require('./App.jsx');
var Home = require('./views/Home.jsx');
var About = require('./views/About.jsx');
var Contact = require('./views/Contact.jsx');


Router({
	index: ReactState('/', App, {
		home: ReactState('/#!/home', Home),
		about: ReactState('/#!/about', About),
		contact: ReactState('/#!/contact', Contact)
	})
})
.init('index');