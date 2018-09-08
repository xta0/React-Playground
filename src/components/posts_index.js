import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchPosts } from '../actions';

class PostIndex extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  renderPosts() {
    const { posts } = this.props;
    return _.map(posts, post => (
      <li key={post.id} className="list-group-item">
        {post.title}
        {post.content}
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { fetch: fetchPosts },
)(PostIndex);
