import React from 'react';
import NavLink from './NavLink';

  const Home = function(props) {
    return (
      <div>
        <h1>Welcome to the Margaret Hamilton School of Javascript</h1>
        <div className = "pic">
        <img src = "/images/Margaret_Hamilton_1995.jpg" />
        <h4>Margaret Hamilton: Software Engineer</h4>
        </div>
        <h2>...and your little dog too!</h2>
        <div className = "pic">
        <img src= "/images/The_Wizard_of_Oz_Margaret_Hamilton_Judy_Garland_1939.jpg" />
        <h4>Margaret Hamilton: Wicked Witch</h4>
        </div>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/students">Students</NavLink></li>
          <li><NavLink to="/campuses">Campuses</NavLink></li>
        </ul>
        {props.children}
      </div>
    );
  };
export default Home;
