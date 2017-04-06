import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class SinglePost extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.oldPost = "";
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => { this.context.router.push('/'); });
  }

  render() {
    const { post } = this.props;

    if (!post || (post == this.oldPost)) {
      return <div>Loading...</div>;
    }

    this.oldPost = post;

    const { menu_title, menu_price } = post.acf;
    const { medium_large } = post.acf.menu_image.sizes;

    return (
      <div>
        <div className="single_hero">
          <img src={medium_large} alt="" />
        </div>
        <Link to="/"><img src="../style/img/arrow-back.svg" alt="Back" /></Link>
        <h3>{post.acf.menu_title}</h3>
        <p>{post.acf.menu_description}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(SinglePost);
