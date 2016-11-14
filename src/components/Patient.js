import React, { PropTypes } from 'react';
import ExpandableComponent from './ExpandableComponent';
import DeleteButton from './DeleteButton';
import {findPathByKey,nestedLookup,nestedDel} from '../utils';


const Patient = ({patient, path, onRemove}) => {
  let dataInfo = Object.keys(patient.data).map( key => {
    return  <span><span style={{'fontWeight': 'bolder'}}>{key}: </span>{patient.data[key]}</span>
  })
  let kidsPath = findPathByKey(patient, 'records')

  return (
    <ExpandableComponent teaser={dataInfo[0]} path={path}>
      <li className="collection-item">
        {dataInfo.map((info,idx) => <div key={idx}>{info}</div>)}
        <div className="right-align">
          <DeleteButton onRemove={() => onRemove(path)} />
        </div>
      </li>
      { kidsPath ?
        <li className="collection-item">{nestedLookup(patient, kidsPath).map( (kid,index) =>
          <Patient
            key={index}
            patient={kid}
            path={path+"."+kidsPath+"."+index}
            onRemove={onRemove}
          />
        )}</li>
      :
        null
      }
    </ExpandableComponent>
  )
}

Patient.propTypes = {
  patient: PropTypes.object.isRequired,
  // depth: PropTypes.number
  path: PropTypes.string.isRequired
};


Patient.defaultProps = { path: "0" }


export default Patient
