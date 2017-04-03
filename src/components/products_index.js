import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      const drink_cat = post.menu_cat.toString();
      const drink_cat_replace = drink_cat.replace(drink_cat, 'drykkir');

      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"products/" + post.id}>
            <span className="pull-xs-right">{post.slug}</span>
            <strong>{post.slug}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
