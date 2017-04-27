// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';
import AddStudent from './AddStudent';
import {removeStudent} from '../reducers/studentReducer';

// ------------- Component
const Students = (props) => {
  return (
    <div>
      <h3>Add a Student </h3>
      <AddStudent />
      <h1>These are the Students!</h1>
      <ul>
        { props.allStudents.map(student => (
          <li key={student.id} ><NavLink to={`/students/${student.name}`}>{student.name}
             </NavLink><button onClick= { () => props.removeStudent(student.id)}>  X </button></li>
        )) }
      </ul>
      {props.children}
    </div>
  );
};

// ------------- Container
const mapStateToProps = (state) => {
  return {
    allStudents: state.students.allStudents,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeStudent: (studentId) => {
      console.log('remove student studentId ', studentId);
      dispatch(removeStudent(studentId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
