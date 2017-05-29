// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import {removeStudent} from '../reducers/studentReducer';
import {removeCampus} from '../reducers/campusReducer';

// ------------- Component
const DeleteButton = (props) => {
    const onButtonClick = (e) => {
        //e.preventDefault();
        if (props.type === 'student') {
          props.removeStudent(props.id);
        } else {
          props.removeCampus(props.id);
        }
    };


    return (
        <button className="btn btn-primary btn-large" onClick={onButtonClick}>X</button>
    );
};

// ------------- Container
const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => {
  return {
    removeCampus: (campusId) => {
      dispatch(removeCampus(campusId));
    },
    removeStudent: (studentId) => {
      dispatch(removeStudent(studentId));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton);
