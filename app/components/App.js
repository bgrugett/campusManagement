// Required libraries
import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import store from '../store';
import { fetchStudents } from '../reducers/studentReducer';
import { fetchCampuses } from '../reducers/campusReducer';

// ------------- Component
class App extends React.Component {
  componentDidMount() {
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampuses());
  }

  render() {
    return (
     <div>
      <NavBar />

     <div>
       {this.props.children ? this.props.children : null}
     </div>
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Margaret Hamilton Campus Management 2017</p>
                </div>
            </div>
        </footer>
    </div>
    );
  }
}

// ------------- Container
const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
