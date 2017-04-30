import React from 'react';
import { connect } from 'react-redux';
import {addCampus} from '../reducers/campusReducer';

class AddCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  location: '',
                  imageURL: ''
                };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeLocation(event) {
    this.setState({location: event.target.value});
  }

  handleChangeImage(event) {
    this.setState({imageURL: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let campusData = {name: this.state.name, location: this.state.location, imageURL: this.state.imageURL};
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
          Location:
          <input type="text" value={this.state.location} onChange={this.handleChangeLocation} />
        </label>
        <label>
          Image:
          <input type="text" value={this.state.imageURL} onChange={this.handleChangeImage} />
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
