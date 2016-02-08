import React, { Component } from 'react';

export default class App extends Component {
  render() {
  	var elements = [
  		{ "name": "Alfred"},
  		{ "name": "Béatrice"},
  		{ "name": "Wilhem"},
  		{ "name": "Zlatan"},
  	];

    return (
    	<div>
      	<h1>Hello, world.</h1>
      	<List data={ elements }></List>
      </div>
    );
  }
}

export class List extends Component {
	render(){
		var elements = this.props.data.map(function(element) {
      return (
        <ListElement>
          {element.name}
        </ListElement>
      );
    });

		return (
				<ul>
					{ elements }
				</ul>
			);
	}
}

export class ListElement extends Component {
	render(){
		return (
				<li>
					{ this.props.children }
				</li>
			);
	}
}