import React from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';
import AddElement from './AddElement';

const getNewElement = (id, label) => ({id, label, isDone: false});

class ClassesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentList: props.listElements
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(label){
    const newElemen = getNewElement(
      (this.state.currentList.length + 1),
      label
    );
    this.setState({
      currentList: this.state.currentList.concat(newElemen)
    });
  }

  render(){
    return(
      <div>
        <Header />
          <div>
            {this.state.currentList.map((e, i) =>
              <ListElement key={i} {...e} />
            )}
          </div>
          <AddElement onAdd={this.handleAdd}/>
      </div>
    );
  }
};

export default ClassesList;
