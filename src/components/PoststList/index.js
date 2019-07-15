import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../postActions';

export class PostsList extends Component {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(fetchPosts());
    }
  }

  render() {
    const { error, loading, posts } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (loading) {
      return <div>Loading ...</div>;
    }

    return (
      <div className="posts-list-container">
        <h4>Hello from PostsList</h4>
        {posts && posts.map(post => (
          <div key={post.id}>
            <p><small>Post #{post.id}:</small></p>
            <p><strong>{post.name}</strong></p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  loading: state.posts.loading,
  error: state.posts.error
})

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPosts: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//     reset: () => dispatch({ type: 'RESET' })
//   }
// }

export default connect(mapStateToProps)(PostsList);
