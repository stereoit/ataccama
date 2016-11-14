import React, { PropTypes } from 'react'

const DeleteButton = ({onRemove}) => {
  return (
    <button
      onClick={onRemove}
      className="btn red waves-effect waves-light right-align"
      style={{'margin': '0.5em'}}
    >
      Delete
      <i className="material-icons left">delete</i>
      </button>
  )
}

export default DeleteButton;
