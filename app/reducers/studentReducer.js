// Required libraries
import axios from 'axios';
import {removeElement, findObjectByName} from './utility';

// ----------- Actions
const FETCH_STUDENTS = 'FETCH_STUDENTS';
const DELETE_STUDENT = 'DELETE_STUDENT';
const SELECT_STUDENT = 'SELECT_STUDENT';
const NEW_STUDENT = 'NEW_STUDENT';

// ----------- Action Creators
export const receiveStudents = (students) => {
  return {
    type: FETCH_STUDENTS,
    students
  };
};

export const newStudent = (student) => {
  return {
    type: NEW_STUDENT,
    student
  };
};

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student
  };
};

export const selectStudent = (student) => {
  return {
    type: SELECT_STUDENT,
    student
  };
};

// ----------- Reducer
const initialState = {
  allStudents: [],
  selectedStudent: {}
};

export default function studentReducer (state = initialState, action) {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case FETCH_STUDENTS:
      nextState.allStudents = action.students;
      break;

    case NEW_STUDENT:
      nextState.allStudents = nextState.allStudents.concat(action.student);
      break;

    case DELETE_STUDENT:
      nextState.allStudents = removeElement(nextState.allStudents, action.student);
      break;

    case SELECT_STUDENT:
      nextState.selectedStudent = findObjectByName(state.allStudents, action.student);
      break;

      default:
        return state;
  }
  return nextState;
}

// ----------- Disptachers
export const fetchStudents = () => {
  return (dispatch) => {
    axios.get('/api/students')
      .then(response => {
        dispatch(receiveStudents(response.data));
      })
      .catch(console.error);
  };
};
export const addStudent = (studentData) => {
  return (dispatch) => {
    axios.post('/api/students/add', studentData)
      .then( () => {
        //dispatch(newStudent(response.data));
        dispatch(fetchStudents());
      })
      .catch(console.error);
  };
};

export const removeStudent = (studentId) => {
  return (dispatch) => {
    axios.delete(`/api/students/delete/${studentId}`)
      .then( () => {
        dispatch(fetchStudents());
      })
      .catch(console.error);
  };
};
