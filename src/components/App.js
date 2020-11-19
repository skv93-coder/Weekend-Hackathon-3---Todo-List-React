
import { useState } from "react";
import React from "react";

export default function App() {
  const [inputBox, setInputBox] = useState("");
  const [editBoxText, setEditBoxText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [taskId, setTaskId] = useState(0);
  const [showEditBox, setShowEditBox] = useState(false);
  const [editId, setEditId] = useState(1);

  const handleInputBoxChange = (event) => {
    let text = event.target.value;
    setInputBox(text);
  };

  const handleAddTask = () => {
    let tempList = [...toDoList];
    tempList.push({ id: taskId, text: inputBox });
    setTaskId(taskId + 1);
    setToDoList(tempList);
    setInputBox("");
  };

  const handleDelete = (id) => {
    let newToDoList = toDoList.filter((task) => task !== toDoList[id]);
    setToDoList(newToDoList);
  };

  const handleEdit = (id) => {
    setShowEditBox(!showEditBox);
    setEditId(id);
  };

  const handleEditBox = (event) => {
    let text = event.target.value;
    setEditBoxText(text);
  };

  const saveEdit = () => {
    const tempList = [...toDoList];
    tempList.forEach((task) => {
      if (task.id === editId) {
        task.text = editBoxText;
      }
    });
    setToDoList(tempList);
    setShowEditBox(false);
    setEditBoxText("");
  };

  return (
    <>
      <div id="main">
        <textarea id="task" value={inputBox} onChange={handleInputBoxChange} />
        <button id="btn" disabled={!inputBox} onClick={handleAddTask}>
          Add Task
        </button>
        <hr />
        {toDoList.length === 0 ? (
          <div>No Tasks</div>
        ) : (
          <ul>
            {toDoList.map((task, id) => {
              return (
                <>
                  <li key={id} className="list">
                    {task.text}
                  </li>
                  <button className="edit" onClick={() => handleEdit(id)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(id)}>
                    Delete
                  </button>
                </>
              );
            })}
          </ul>
        )}
        {showEditBox ? (
          <div>
            <textarea
              className="editTask"
              value={editBoxText}
              onChange={handleEditBox}
            />
            <button
              className="saveTask"
              disabled={!editBoxText}
              onClick={() => saveEdit()}
            >
              Save
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
}