import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/actions";
import ReactMarkdown from "react-markdown";

class PostPage extends React.Component {
  componentDidMount() {
    console.log("Stage 1");
    const post_id = this.props.match.params.id;
    console.log("Now let's fetch this post:", post_id);
    this.props.dispatch(fetchPost(post_id));
  }
  render() {
    const loading = !this.props.posts;
    return (
      <div>
        <h1>Posts</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h3>
              <ReactMarkdown source={this.props.posts.post.title} />
            </h3>
            <ReactMarkdown source={this.props.posts.post.content} />
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  return {
    posts: reduxState.posts
  };
}
export default connect(mapStateToProps)(PostPage);
