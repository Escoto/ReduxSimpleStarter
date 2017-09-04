//Packages
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//My Libraries
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBSguVhOttTKJ_s8AekIyTv0MUovD8eByA';

YTSearch({key: API_KEY, term: 'stuff'}, function(data){
	console.log(data);
})

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('.container'));
