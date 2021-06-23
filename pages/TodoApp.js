import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentInputItem: {
        text: "",
        key: ""
      }
    };
  }
  //1.3
  handleInput = e => {
    //setting current input into state
    this.setState({
      currentInputItem: {
        text: e.target.value,
        key: Date.now()
      }
    });
  };
  //2.3
  addItem = e => {
    //adding currentInputItem into items
    this.setState({
      items: [...this.state.items, this.state.currentInputItem],
      currentInputItem: {
        text: "",
        key: ""
      }
    });
  };
  //3.3
  deleteItem = key => {
    //deleting selected item
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
      currentInputItem: {
        text: "",
        key: ""
      }
    });
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          currentInputItem={this.state.currentInputItem}
          handleInput={this.handleInput}
          addItem={this.addItem}
        />
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default TodoApp;
