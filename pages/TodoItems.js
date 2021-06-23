import React from "react";
import ReactDOM from 'react-dom';  
function TodoItems(props) {
  return (
    <ul className="theList">
      {props.items.map(item => {
        return (
          <li
            key={item.key}
            onClick={() => {
              props.deleteItem(item.key);
            }}
          >
            {item.text}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoItems;
