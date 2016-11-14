import React from 'react';
import ReactDOM from 'react-dom';
import patients from './json/data';
import Patient from './components/Patient';


class App extends React.Component {
  render() {
    const {patients} = this.props
    return (
      <div className="container">
        <h2>Arkham asylum registry</h2>
        {patients.map( (patient,index) => <Patient key={index} patient={patient} /> )}
      </div>
    )
  }
}

ReactDOM.render(
  <App patients={patients} />,
  document.getElementById('app')
);

console.log("Arkham asylum app started X1");
