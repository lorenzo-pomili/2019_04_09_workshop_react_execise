import React from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';
import {listElements} from 'src/mocks/mocks';

class ClassesList extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <Header />
          <div>
          {listElements.map((e, i) =>
            <ListElement key={i} {...e} />
          )}
        </div>
      </div>
    );
  }
};

export default ClassesList;
