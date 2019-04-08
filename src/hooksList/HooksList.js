import React, { useState } from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';
import AddElement from './AddElement';

const getNewElement = (id, label) => ({id, label, isDone: false});

const HooksList = ({listElements}) => {
    const [currentList, setCurrentList] = useState(listElements);

    const handleAdd = (label) => {
      const newElemen = getNewElement(
        (currentList.length + 1),
        label
      );
      setCurrentList(currentList.concat(newElemen));
    }

    return (<div>
      <Header />
      <div>
      {currentList.map((e, i) =>
        <ListElement key={i} {...e} />
      )}
      </div>
      <AddElement onAdd={handleAdd}/>
    </div>);
}


export default HooksList;
