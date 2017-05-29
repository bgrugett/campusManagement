import React from 'react';
import { connect } from 'react-redux';
import NavLink from './NavLink';

const Campus = (props) => {
  let id = props.selectedCampus.id;
  let allStudents = props.allStudents;
  let campusStudents = allStudents.filter(obj => obj.campusId === id);

    return (
      <div style={{margin: '100px'}}>
        <h2>Campus Name: {props.params.name}</h2>
        <h3>Campus Location: {props.selectedCampus.location}</h3>
        <div className="col-md-5">
          <div className="thumbnail">
            <img className="img-responsive" src={props.selectedCampus.imageURL} />
          </div>
        </div>
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
  return {
    allStudents: state.students.allStudents,
    selectedCampus: state.campuses.selectedCampus
  };
};
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Campus);

