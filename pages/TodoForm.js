import React from "react";


const TodoForm = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  const CreatedAt=new Date().toLocaleString();
  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
        
      <h1>Todo List</h1>

      <form className="formadd" onSubmit={handleSubmit}>
        <input
        className="inadd"
          type="text"
          placeholder="Enter Todo "
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit" className="addbut">Add Todo</button>
      </form>
     
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
          
            {todo.id === todoEditing ? (
              <input
              
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div className="todo-text"><ul><li>{todo.text}</li></ul></div>
            )}
          </div>
          <div className="todo-actions">
          <div className="date">Create date:{CreatedAt}</div>
            {todo.id === todoEditing ? (
              <button className="contactbtn"onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              
              <button className="contactbtn" onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button className="contactbtn" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  
  );
};

export default TodoForm;