import React from "react";
import "./../styles/App.css";

function App() {
  const [list, setlist] = React.useState([]);
  const [task, settask] = React.useState("");
  const handle = (idx) => {
    let coplist = [...list];
    coplist[idx].edit = true;
    setlist(coplist);
  };
  const handleSaveEdit = (idx) => {
    let coplist = [...list];
    coplist[idx].edit = false;
    setlist(coplist);
  };

  const handleEdit = (text, idx) => {
    if (" " === text || text === "") {
      return;
    }
    let copylist = [...list];
    copylist.map((todo, i) => (i === idx ? (todo.name = text) : todo));
    setlist(copylist);
  };
  const handleDelete = (ev, idx) => {
    let copylist = [];
    for (let i = 0; i < list.length; i++) {
      if (idx === i) {
      } else {
        copylist.push(list[i]);
      }
    }
    setlist(copylist);
  };
  const handleClick = () => {
    let copylist = [...list];
    copylist.push({ name: task, edit: false });
    settask("");
    setlist(copylist);
  };
  const handleChnage = (text) => {
    if (text === " " || text === "") {
      return;
    }
    settask(text);
  };
  return (
    <>
      {list.map((task, idx) => (
        <li className="list">
          {task.name}
          <button className="edit" onClick={(event) => handle(idx)}>
            edit
          </button>
          <button
            className="delete"
            onClick={(event) => handleDelete(event.target.innerText, idx)}
          >
            delete
          </button>
          {task.edit ? (
            <>
              <textarea
                value={task.name}
                onChange={(event) => handleEdit(event.target.value, idx)}
                className="editTask"
              ></textarea>
              <button
                className="saveTask"
                onClick={(event) => handleSaveEdit(idx)}
              >
                save
              </button>
            </>
          ) : null}
        </li>
      ))}
      <div id="main">
        <textarea
          id="task"
          value={task}
          onChange={(evnt) => handleChnage(evnt.target.value)}
        ></textarea>
        <button id="btn" onClick={handleClick}>
          add
        </button>
      </div>
    </>
  );
}

export default App;
