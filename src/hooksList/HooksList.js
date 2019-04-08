import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';
import AddElement from './AddElement';
import * as todoList from 'src/services/todoList';

const getNewElement = (id, label) => ({id, label, isDone: false});

const HooksList = ({listElements}) => {
    const [currentList, setCurrentList] = useState(listElements);

    useEffect(() => {
      todoList.getData().then(list => {
        setCurrentList(list);
      });
    }, []);

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
