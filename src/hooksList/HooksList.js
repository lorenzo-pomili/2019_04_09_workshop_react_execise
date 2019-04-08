import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';
import AddElement from './AddElement';
import * as todoList from 'src/services/todoList';

const getNewElement = (label) => ({label, isDone: false});

const HooksList = () => {
    const [currentList, setCurrentList] = useState([]);
    const [needData, setNeedData] = useState(true);

    useEffect(() => {
      if(needData){
        todoList.getData().then(list => {
          setNeedData(false);
          setCurrentList(list);
        });
      }
    }, [needData]);

    const handleAdd = label => {
      todoList.addData(label).then(() => {
        setNeedData(true);
      });
    }

    const handleRemove = id => {
      todoList.removeData(id).then(() => setNeedData(true));
    }

    return (<div>
      <Header />
      <div>
        {currentList.map((e, i) =>
          <ListElement key={i} {...e} onRemove={handleRemove} />
        )}
      </div>
      <AddElement onAdd={handleAdd}/>
    </div>);
}


export default HooksList;
