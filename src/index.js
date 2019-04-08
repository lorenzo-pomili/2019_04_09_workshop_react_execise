import React from 'react';
import ReactDOM from 'react-dom';

const listElements = [
  {id: 1, label: "Foo", isDone: false},
  {id: 2, label: "Bar", isDone: false},
  {id: 3, label: "Baz", isDone: false}
];

const Header = () => <h1>Todo List</h1>;

const ListElement = ({label, isDone}) => <div>
  <span>{label}</span>
  <span style={{marginLeft: "50px", cursor: "pointer"}}>{isDone ? 'v' : 'x'}</span>
</div>;

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