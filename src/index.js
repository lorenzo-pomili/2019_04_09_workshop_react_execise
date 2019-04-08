import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';

const listElements = [
  {id: 1, label: "Foo", isDone: false},
  {id: 2, label: "Bar", isDone: false},
  {id: 3, label: "Baz", isDone: false}
];

ReactDOM.render(
    <div>
      <Header />
      <div>
        {listElements.map((e, i) =>
          <ListElement key={i} {...e} />
        )}
      </div>
    </div>,
    document.getElementById('root')
);