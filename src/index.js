import React from 'react';
import ReactDOM from 'react-dom';
import HooksList from 'src/hooksList/HooksList';
import ClassesList from 'src/classesList/ClassesList';

ReactDOM.render(
    <div>
      <div style={{float: 'left'}}>
        <HooksList />
      </div>
      <div style={{float: 'right'}}>
        <ClassesList />
      </div>
    </div>,
    document.getElementById('root')
);