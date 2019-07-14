import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../postActions';

export class PostsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { error, loading, posts } = this.props;
    console.log(this.props)

    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (loading) {
      return <div>Loading ...</div>;
    }

    return (
      <div>
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

export default connect(mapStateToProps)(PostsList);
