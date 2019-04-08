import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => <h1>Todo List</h1>;

ReactDOM.render(
    <div>
      <Header />
      <div>
        <div><span>Foo</span><span style={{marginLeft: "50px", cursor: "pointer"}}>x</span></div>
        <div><span>Bar</span><span style={{marginLeft: "50px", cursor: "pointer"}}>x</span></div>
        <div><span>Baz</span><span style={{marginLeft: "50px", cursor: "pointer"}}>x</span></div>
      </div>
    </div>,
    document.getElementById('root')
);