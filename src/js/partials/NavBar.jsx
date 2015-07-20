var React = require('react');
var data = require('../data.json').navbar;


var NavBar = React.createClass({
	render: function () {
		var items = data.map(function (elem, i) {
			return <li key={i}><a data-nav="mousedown" href={elem.link}>{elem.title}</a></li>
		});

		return <ul>{items}</ul>
	}
});

module.exports = NavBar;