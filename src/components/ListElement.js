import React from 'react';

const ListElement = ({label, isDone}) => <div>
  <span>{label}</span>
  <span style={{marginLeft: "50px", cursor: "pointer"}}>{isDone ? 'v' : 'x'}</span>
</div>;

export default ListElement;