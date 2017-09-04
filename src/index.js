import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBSguVhOttTKJ_s8AekIyTv0MUovD8eByA';

class App extends Component {

	constructor(args){
		super(args);

		this.state = { videos: [], selectedVideo: null };

		this.videoSearch('stuff');
	}

	videoSearch(text){
		YTSearch({key: API_KEY, term: text}, videos => {
			this.setState({ videos:videos, selectedVideo:videos[0] });
		});
	}

	render() {
		const videoSearch = _.debounce((text)=>{this.videoSearch(text)}, 200);
		return (
			<div>
				<SearchBar onSearchTextChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos} />
			</div>
		);
	}

}//EDN

ReactDOM.render(<App />, document.querySelector('.container'));
