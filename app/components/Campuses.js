// Required libraries
import React from 'react';
import NavLink from './NavLink';
import { connect } from 'react-redux';
import AddCampus from './AddCampus';
import {removeCampus} from '../reducers/campusReducer';

// ------------- Component
const Campuses = (props) => {
  return (
    <div>
      <header className="jumbotron hero-spacer">
        <h3>Add a Campus </h3>
        <AddCampus />
      </header>
          <h2>These are the Campuses!</h2>
      <div className="container-fluid">
        <div className="row, text-left" style={{textAlign: 'center'}}>
          <div className="col-xs-6" >
            <ul style={{listStyleType: 'none', display: 'inline-block', textAlign: 'left'}}>
              { props.allCampuses.map(campus => (
                <li key={campus.id}><NavLink to={`/campuses/${campus.name}`}>
                  <h3>{campus.name}</h3>
                  </NavLink><button onClick= { () => props.removeCampus(campus.id)}>  Delete </button>
                  <img className="img-responsive"  style={{width: '300px', height: 'auto'}} src={campus.imageURL} />
                </li>
              )) }
            </ul>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

// ------------- Container
const mapStateToProps = (state) => {
  return {
    allCampuses: state.campuses.allCampuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCampus: (campusId) => {
      console.log('remove campus campusId ', campusId);
      dispatch(removeCampus(campusId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);
