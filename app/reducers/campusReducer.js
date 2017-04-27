// Required libraries
import axios from 'axios';
import {removeElement, findObjectByName} from './utility';

// ----------- Actions
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const NEW_CAMPUS = 'NEW_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
const SELECT_CAMPUS = 'SELECT_CAMPUS';

// ----------- Action Creators
export const receiveCampuses = (campuses) => {
  return {
    type: FETCH_CAMPUSES,
    campuses
  };
};

export const newCampus = (campus) => {
  return {
    type: NEW_CAMPUS,
    campus
  };
};

export const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus
  };
};

export const selectCampus = (campus) => {
  return {
    type: SELECT_CAMPUS,
    campus
  };
};

// ----------- Reducer
const initialState = {
  allCampuses: [],
  selectedCampus: {}
};

export default function campusReducer (state = initialState, action) {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case FETCH_CAMPUSES:
      nextState.allCampuses = action.campuses;
      break;

    case NEW_CAMPUS:
      nextState.allCampuses = nextState.allCampuses.concat(action.campus);
      break;

    case DELETE_CAMPUS:
      nextState.allCampuses = removeElement(nextState.allCampuses, action.campus);
      break;

    case SELECT_CAMPUS:
      nextState.selectedCampus = findObjectByName(nextState.allCampuses, action.campus);
      break;

      default:
        return state;
  }
  return nextState;
}

// ----------- Disptachers
export const fetchCampuses = () => {
  return (dispatch) => {
    axios.get('/api/campuses')
      .then(response => {
        dispatch(receiveCampuses(response.data));
      })
      .catch(console.error);
  };
};
export const addCampus = (campusData) => {
  return (dispatch) => {
    axios.post('/api/campuses/add', campusData)
      .then(() => {
        dispatch(fetchCampuses());
      })
      .catch(console.error);
  };
};
export const removeCampus = (campusId) => {
  return (dispatch) => {
    axios.delete(`/api/campuses/delete/${+campusId}`)
      .then(() => {
        dispatch(fetchCampuses());
      })
      .catch(console.error);
  };
};
