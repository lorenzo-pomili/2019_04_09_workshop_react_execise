import React from 'react';

class AddElement extends React.Component {
  constructor(){
    super();
    this.state = {
      currentLabel: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  handleChange(e){
    this.setState({
      currentLabel: e.target.value
    });
  }

  onAdd(){
    this.props.onAdd(this.state.currentLabel);
  }

  render(){
    return(
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.onAdd}>ADD</button>
      </div>
    );
  }
};

export default AddElement;
