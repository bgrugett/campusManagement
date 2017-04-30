// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import AddStudent from './AddStudent';
import Table from './Table';
import DeleteButton from './DeleteButton';
import NavLink from './NavLink';
import {removeStudent} from '../reducers/studentReducer';

// ------------- Component
const Students = (props) => {
  return (
     <header className="jumbotron hero-spacer">
        <div>
          <h3>Add a Student </h3>
          <AddStudent />
          <div className="col-md-9">
              { props.rows &&
                <Table
                    rows = {props.rows}
                    columns = {props.columns}
                    tableName = {'The Students'}
                />
              }
          </div>
          {props.children}
        </div>
      </header>

  );
};

// ------------- Container
const mapStateToProps = (state) => {
    let allStudents = state.students.allStudents;
    if ( allStudents.length) {
      let rows = allStudents.map((student) => {
        let deleteRow = <DeleteButton type={'student'} id={student.id} />;
        let entry = <NavLink to={`/students/${student.name}`}> {student.name}</NavLink>;
          return {delete: deleteRow, student: entry};
      });
      return ({ rows: rows, columns: Object.keys(rows[0]), allStudents: allStudents});
    }
    return {}; // returns empty object if no students on the state
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
