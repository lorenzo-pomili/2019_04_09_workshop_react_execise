import React, { useState } from 'react';

const AddElement = ({onAdd}) => {
  const [label, setLabel] = useState('');

  const handleChange = (e) => setLabel(e.target.value);

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={() => onAdd(label)}>ADD</button>
    </div>
  );
};

export default AddElement;
