import React from 'react';

export const IconSwitch = (props) =>  {
const {icon, onClick} = props;
  return (
      <div className="control" onClick={onClick}>
        <div className="material-icons">{icon}</div>
      </div>
  )
}

