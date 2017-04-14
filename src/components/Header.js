import React from 'react';

const Header = (props) => {
  return (
    <div className="main_header">
      <ul>
        <li>
          <h2>{props.headerText}</h2>
        </li>
        <li><img src="../style/img/menu.svg" /></li>
      </ul>
    </div>
  );
};

export default Header;
