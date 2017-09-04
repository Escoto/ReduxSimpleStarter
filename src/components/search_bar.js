import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(args) {
      super(args);

      this.state = {text:''};
  }

  render() {
    //return <input onChange={this.onInputChange} />
    return (
      <div>
        <input
          value={this.state.text}
          onChange = {event => this.setState({text: event.target.value}) } />
      </div>
    )
  }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
