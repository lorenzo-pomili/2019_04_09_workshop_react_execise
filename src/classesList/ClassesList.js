import React from 'react';
import Header from 'src/components/Header';
import ListElement from 'src/components/ListElement';
import AddElement from './AddElement';
import * as todoList from 'src/services/todoList';

const getNewElement = (id, label) => ({id, label, isDone: false});

class ClassesList extends React.Component {
  constructor() {
    super();
    this.state = {
      currentList: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.getTodoList = this.getTodoList.bind(this);
  }

  getTodoList(){
    todoList.getData().then(list => {
      this.setState({
        currentList: list
      });
    });
  }

  componentDidMount(){
    this.getTodoList();
  };

  handleAdd(label){
    todoList.addData(label).then(() => {
      this.getTodoList();
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
