import React from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';

const Campus = (props) => {
  console.log('~~~props in Campus ', props);
  let id = props.selectedCampus.id;
  let allStudents = props.allStudents;
  console.log('all students ', allStudents);
  let campusStudents = allStudents.filter(obj => obj.campusId === id);
  console.log('campus students ', campusStudents);

    return (
      <div>
        <h2>Campus Name: {props.params.name}</h2>
        <h3>Campus Planet: {props.selectedCampus.planet}</h3>
        <h3>These are the Students on this Campus</h3>
      <ul>
        { campusStudents.map(student => (
          <li key={student.id} ><NavLink to={`/students/${student.name}`}>{student.name}</NavLink></li>
        )) }
      </ul>
      </div>
    );
};


// ------------- Container
const mapStateToProps = (state) => {
  console.log('~~state in Campus ', state);
  return {
    allStudents: state.students.allStudents,
    selectedCampus: state.campuses.selectedCampus
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Campus);

