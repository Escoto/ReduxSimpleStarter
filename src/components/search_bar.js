import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
      super(props);

      this.state = {text:''};
  }

  onInputChange(text){
    this.setState({text});
    this.props.onSearchTextChange(text);
  }

  render() {
    return (
      <div className = "search-bar">
        <input
          value={this.state.text}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
}

export default SearchBar;
