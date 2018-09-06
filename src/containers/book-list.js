import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions';

class BookList extends Component {
  renderList() {
    const { books, selectedBook } = this.props;
    return books.map(book => (
      <li
        // selectedBook returns an action onClick=
        onClick={() => selectedBook(book)}
        onKeyDown={this.handleClick}
        key={book.title}
        className="list-group-item"
      >
        {book.title}
      </li>
    ));
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside booklist
  // console.log(new Error().stack);
  return {
    books: state.books,
  };
}

// Anything returned from this function will end up as a props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectedBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container
// it needs to konw about this new dispatch method, selectBook, Make it available as a prop
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);
