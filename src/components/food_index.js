import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFood } from '../actions/index';
import { Link } from 'react-router';

class FoodIndex extends Component {
  componentWillMount() {
    this.props.fetchFood();
  }

  renderFood() {
    return this.props.posts.map((post) => {
      const drink_cat = post.menu_cat.toString();
      const drink_cat_replace = drink_cat.replace(drink_cat, 'drykkir');

      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"matur/" + post.id}>
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
          {this.renderFood()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchFood })(FoodIndex);
