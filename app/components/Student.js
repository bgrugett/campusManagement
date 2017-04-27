import React from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';

const Student = (props) => {
  console.log('~~~props in Student ', props);
    return (
      <div>
        <h2>Student Name: {props.params.name}</h2>
        <h3>Student email: {props.selectedStudent.email}</h3>
        <h3>Student campus: <NavLink to={`/campuses/${props.selectedStudent.campus.name}`}>{props.selectedStudent.campus.name}</NavLink></h3>
      </div>
    );
};


// ------------- Container
const mapStateToProps = (state) => {
  console.log('~~state in Student ', state);
  return {
    selectedStudent: state.students.selectedStudent
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Student);

