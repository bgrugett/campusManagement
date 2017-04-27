// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// ------------- Component
const NavBar = (props) => {

  return (
<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <Link className="navbar-brand" to="/">Campus Management</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/campuses">Campuses</Link>
                    </li>
                </ul>
              <div className="pull-right">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/students">Students</Link>
                    </li>
                </ul>
              </div>
            </div>

        </div>

    </nav>
  );
};


// ------------- Container
const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
