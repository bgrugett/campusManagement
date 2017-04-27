import React from 'react';
import { connect } from 'react-redux';
import {addCampus} from '../reducers/campusReducer';

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  planet: ''
                };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePlanet = this.handleChangePlanet.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangePlanet(event) {
    this.setState({planet: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let campusData = {name: this.state.name, planet: this.state.planet};
    this.props.addCampus(campusData);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <label>
          Planet:
          <input type="text" value={this.state.planet} onChange={this.handleChangePlanet} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// ------------- Container
const mapStateToProps = (state) => {
  return {
    allCampuses: state.campuses.allCampuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCampus: (campusData) => {
      dispatch(addCampus(campusData));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
