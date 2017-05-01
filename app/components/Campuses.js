// Required libraries
import React from 'react';
import NavLink from './NavLink';
import { connect } from 'react-redux';
import AddCampus from './AddCampus';
import {removeCampus} from '../reducers/campusReducer';

// ------------- Component
const Campuses = (props) => {
  return (
    <header className="jumbotron hero-spacer">
    <div>
    <h3>Add a Campus </h3>
      <AddCampus />
      <h2>These are the Campuses!</h2>
      <ul className="text-center">
        <div className="col-md-3 text-center" >
          { props.allCampuses.map(campus => (
            <li key={campus.id} ><NavLink to={`/campuses/${campus.name}`}>
              <h3>{campus.name}</h3>
              </NavLink><button onClick= { () => props.removeCampus(campus.id)}>  Delete </button>
              <img className="img-responsive" src={campus.imageURL} />
            </li>
        )) }
        </div>
      </ul>
      {props.children}
    </div>
    </header>
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
