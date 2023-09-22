import React, { useState } from "react";
import Proptypes from "prop-types";

import "./taskitem.css";
import Delete from "../../img/trash.svg";
import Edit from "../../img/pencil.svg";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTile, setEditableTile] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTile(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTile === "") {
        setEditableTile("Nova Tarefa");
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <div className="titleEdit">
          <input
            className="inputTitle"
            type="text"
            value={editableTile}
            onChange={onTitleChange}
            onKeyPress={onKeyPress}
          />
          <img className="img-edit" src={Edit} alt="editar" />
        </div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Feito">Feito</option>
        </select>
        <div className="delete" onClick={(e) => onDeleteTask(id)}>
          <img src={Delete} alt="delete" /> Excluir
        </div>
      </div>
    );
  }
  return (
    <div className="task-item">
      <div className="titleItem">
        <p onClick={(e) => setIsEditing(true)}>{editableTile}</p>
      </div>
      <select onChange={onTaskStateChange} value={taskState}>
        <option value="Pendente">Pendente</option>
        <option value="Fazendo">Fazendo</option>
        <option value="Feito">Feito</option>
      </select>
      <div className="delete" onClick={(e) => onDeleteTask(id)}>
        <img src={Delete} alt="delete" /> Excluir
      </div>
    </div>
  );
}
TaskItem.Proptypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  taskState: Proptypes.string.isRequired,
  onTaskUpdate: Proptypes.func.isRequired,
  onDeleteTask: Proptypes.func.isRequired
};
