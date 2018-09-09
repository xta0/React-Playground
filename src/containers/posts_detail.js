import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDetail, deletePost } from '../actions';

class PostsDetail extends React.Component {
  componentDidMount() {
    const { fetch, match } = this.props;
    fetch(match.params.id);
  }

  onDeleteClick() {
    const { deleteDetail, history, match } = this.props;
    deleteDetail(match.params.id, () => {
      history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
          type="submit"
        >
          Delete Posts
        </button>
        <h3> {post.title} </h3>
        <h6> {post.categories} </h6>
        <p> {post.content} </p>
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id],
  };
}
export default connect(
  mapStateToProps,
  {
    fetch: fetchDetail,
    deleteDetail: deletePost,
  },
)(PostsDetail);
