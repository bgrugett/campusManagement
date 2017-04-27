'use strict';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from './components/Home';
import Students from './components/Students';
import Student from './components/Student';
import AddStudent from './components/AddStudent';
import AddCampus from './components/AddCampus';
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import { connect } from 'react-redux';


const Root = (props) => {
  //console.log('~~~props inside root ', props);

const handleOnEnter = (event) => {
  props.fetchStudents();
  props.fetchCampuses();
};

  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home}>
        <Route path="/students" component={Students} onEnter={ handleOnEnter} >
          <Route path="/students/:name" component={Student} onEnter={ props.selectStudent } />
          <Route path="/students/AddStudent" component={AddStudent}  />
        </Route>
        <Route path="/campuses" component={Campuses} onEnter={ handleOnEnter}  >
          <Route path="/campuses/:name" component={Campus} onEnter={ props.selectCampus } />
          <Route path="/campuses/AddCampus" component={AddCampus}  />
        </Route>
      </Route>
    </Router>
  );
};


import {fetchStudents, selectStudent} from './reducers/studentReducer';
import {fetchCampuses, selectCampus} from './reducers/campusReducer';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents());
    },

    fetchCampuses: () => {
      dispatch(fetchCampuses());
    },

   selectStudent: (nextState) => {
      dispatch(selectStudent(nextState.params.name));
    },

  selectCampus: (nextState) => {
      dispatch(selectCampus(nextState.params.name));
    }

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
