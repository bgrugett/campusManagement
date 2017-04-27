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
    <h3>Add a Campus </h3>
      <AddCampus />
      <h1>These are the Campuses!</h1>
      <ul>
        { props.allCampuses.map(campus => (
          <li key={campus.id} ><NavLink to={`/campuses/${campus.name}`}>{campus.name}
             </NavLink><button onClick= { () => props.removeCampus(campus.id)}>  X </button></li>
        )) }
      </ul>
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
