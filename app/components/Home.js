import React from 'react';

  const Home = function(props) {
    return (
      <div>
        <header className="jumbotron hero-spacer">
          <h1>The Margaret Hamilton School of Javascript</h1>
          <div className = "pic">
          <img src = "/images/Margaret_Hamilton_1995.jpg" />
          <h4>Margaret Hamilton: Software Engineer</h4>
          </div>
          <h2>...and your little dog too!</h2>
          <div className = "pic">
          <img src= "/images/The_Wizard_of_Oz_Margaret_Hamilton_Judy_Garland_1939.jpg" />
          <h4>Margaret Hamilton: Wicked Witch</h4>
          </div>
        </header>
        <div className="container">
          <header className="jumbotron hero-spacer">
            <h2>Where the two Margaret Hamiltons rule!</h2>
            <p>We dominate world education beacause we can!</p>
          </header>
        </div>
        {props.children}
      </div>

    );
  };
export default Home;
