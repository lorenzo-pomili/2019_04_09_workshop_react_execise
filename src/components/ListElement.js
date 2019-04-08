import React from 'react';

const ListElement = ({id, label, isDone, onRemove}) => <div>
  <span>{label}</span>
  <span style={{marginLeft: "50px", cursor: "pointer"}} onClick={() => onRemove(id)}>{isDone ? 'v' : 'x'}</span>
</div>;

export default ListElement;
