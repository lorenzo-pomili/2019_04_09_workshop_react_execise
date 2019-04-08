import React from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';

class ClassesList extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <Header />
          <div>
          {this.props.listElements.map((e, i) =>
            <ListElement key={i} {...e} />
          )}
        </div>
      </div>
    );
  }
};

export default ClassesList;
