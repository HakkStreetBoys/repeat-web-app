import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFood } from '../actions/index';
// import { Link } from 'react-router';
import Product from './Product';
import Header from './Header';

class FoodIndex extends Component {
  componentWillMount() {
    this.props.fetchFood();
  }

  renderFood() {
    return this.props.posts.map((post) => {
      const drink_cat = post.menu_cat.toString();
      const drink_cat_replace = drink_cat.replace(drink_cat, 'drykkir');

      return (
        <Product
          post={post}
          key={post.id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <Header headerText="Matur" />
        <div className="container product_container">
          {this.renderFood()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchFood })(FoodIndex);
