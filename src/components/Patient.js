import React, { PropTypes } from 'react'

// try to search for either relatives or phones records, return those
function findKids(patient) {
  let relatives = patient && patient.kids && patient.kids.has_relatives && patient.kids.has_relatives.records || null
  if (relatives) {
    return relatives
  }
  let phones = patient && patient.kids && patient.kids.has_phone && patient.kids.has_phone.records || null
  return phones
}

const Patient = ({patient}) => {
  let patientInfo = Object.keys(patient.data).map( (key,index) => {
    return <tr key={index}><td>{key}</td><td>{patient.data[key]}</td></tr>
  })
  let kids = findKids(patient)
  return (
    <div>
        <table className="striped responsive-table">
          <tbody>
              {patientInfo}
              { kids ?
                <tr><td>{kids.map( (kid,index) => <Patient key={index} patient={kid} /> )}</td></tr>
              :
                null
              }
          </tbody>
        </table>
        <hr />
    </div>
  )
}

export default Patient
