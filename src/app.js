import React from 'react';
import ReactDOM from 'react-dom';
import patients from './json/data';
import Patient from './components/Patient';

import {nestedDel} from './utils';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { patients: props.initialPatients || []}

    this.removePatient = this.removePatient.bind(this)
  }

  removePatient(path){
    let {patients} = this.state
    nestedDel(patients, path)
    this.setState({patients:patients})
  }

  render() {
    const {patients} = this.state
    return (
      <div>
        <nav>
          <div className="nav-wrapper" style={{'paddingLeft': '3em'}}>
            <a href="#" className="brand-logo">Arkham asylum</a>
          </div>
          </nav>
        <div className="container">
            {patients.map( (patient,index) =>
              <Patient
                key={index}
                patient={patient}
                path={""+index}
                onRemove={this.removePatient}
              />
            )}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App initialPatients={patients} />,
  document.getElementById('app')
);

console.log("Arkham asylum app started.");
