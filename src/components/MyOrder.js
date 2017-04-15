import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions';

class MyOrder extends Component {
  componentWillMount() {
    this.props.fetchOrders();
  }

  render() {
    return (
      <div>
        <h1>HALLO</h1>
      </div>
    );
  }

}

export default connect(null, { fetchOrders })(MyOrder);
