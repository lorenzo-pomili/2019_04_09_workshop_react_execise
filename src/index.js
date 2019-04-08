import React from 'react';
import ReactDOM from 'react-dom';
import HooksList from 'src/hooksList/HooksList';
import ClassesList from 'src/classesList/ClassesList';
import {listElements} from 'src/mocks/mocks';

ReactDOM.render(
    <div>
      <div style={{float: 'left'}}>
        <HooksList listElements={listElements} />
      </div>
      <div style={{float: 'right'}}>
        <ClassesList listElements={listElements} />
      </div>
    </div>,
    document.getElementById('root')
);