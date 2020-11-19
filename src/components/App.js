import React from "react";
import "./../styles/App.css";

function App() {
  const [list, setlist] = React.useState([]);
  const [task, settask] = React.useState("");
  const [currEdit, setcurrEdit] = React.useState("");
  const handle = (idx) => {
    let coplist = [...list];
    coplist[idx].edit = true;
    setlist(coplist);
    setcurrEdit(coplist[idx].name);
  };
  const handleSaveEdit = (idx) => {
    let coplist = [...list];
    if(currEdit===""||currEdit===" "){
      return ;
    }
    coplist[idx].edit = false;
    coplist[idx].name = currEdit;
    setlist(coplist);
  };

  const handleEdit = (text) => {
    // if (" " === text || text === "") {
    //   return;
    // }
    setcurrEdit(text);
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
    if (task === " " || task === "") {
      return;
    }
    let copylist = [...list];
    copylist.push({ name: task, edit: false });
    settask("");
    setlist(copylist);
  };
  const handleChnage = (text) => {
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
              <input
                value={currEdit}
                onChange={(event) => handleEdit(event.target.value)}
                className="editTask"
              ></input>
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
        <input
          id="task"
          value={task}
          onChange={(evnt) => handleChnage(evnt.target.value)}
        ></input>
        <button id="btn" onClick={handleClick}>
          add
        </button>
      </div>
    </>
  );
}

export default App;
