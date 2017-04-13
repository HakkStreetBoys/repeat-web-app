import React from 'react';
import { Link } from 'react-router';
// import { fetchFood } from '../actions/index';
// import { fetchDrinks } from '../actions/index';



const Navigation = () => {
  // if(this.props.posts[0].menu_cat[0] == 8) {
  //   console.log('drink');
  // }

  return (
    <div className="navigation">
      <nav>
        <ul>
          <Link to={"matur"}>
            <img src="../style/img/matur-icon.svg" alt="" />
            <li>Matur</li>
          </Link>
          <li className="order_btn">
            <img src="../style/img/order_logo.svg" />
          </li>
          <Link to={"drykkir"}>
            <img src="../style/img/drykkir-icon.svg" alt="" />
            <li>Drykkir</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default Navigation;
