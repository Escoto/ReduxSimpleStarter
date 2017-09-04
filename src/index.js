import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBSguVhOttTKJ_s8AekIyTv0MUovD8eByA';

class App extends Component {

	constructor(args){
		super(args);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'stuff'}, videos => {
			this.setState({ videos });
		});

	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}

}//EDN APP

ReactDOM.render(<App />, document.querySelector('.container'));
