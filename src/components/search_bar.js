import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    const { onSearchTermChange } = this.props;
    onSearchTermChange(term);
  }

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar">
        <input
          value={term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}
