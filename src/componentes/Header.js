import React from 'react';

const Header = (props) => {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-1">
        <div className="brand-logo center">
          {props.titulo}
          <i className="large material-icons">new_releases</i>
        </div>
      </div>
    </nav>
  );
};

export default Header;