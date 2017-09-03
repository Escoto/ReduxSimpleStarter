//Packages
import React from 'react';
import ReactDOM from 'react-dom';

//My Libraries
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBSguVhOttTKJ_s8AekIyTv0MUovD8eByA';

// Create new component.
//This component should produce some HTML.

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

//Take this component's generated HTML
//and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
