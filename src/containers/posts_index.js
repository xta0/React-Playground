import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
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
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
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
