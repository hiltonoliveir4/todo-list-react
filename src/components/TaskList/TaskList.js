import React from "react";
import "./tasklist.css";
import Proptypes from "prop-types";

import Add from "../../img/add.svg";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title"> {title} </div>
      <div className="content">
        {tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            id={task.id}
            title={task.title}
            taskState={task.state}
            onTaskUpdate={onTaskUpdate}
            onDeleteTask={onDeleteTask}
          />
        ))}
        <button className="btn" onClick={addTask}>
          <img src={Add} alt="+" />
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: Proptypes.string.isRequired,
  onAddTask: Proptypes.func.isRequired,
  tasks: Proptypes.array.isRequired,
  onTaskUpdate: Proptypes.func.isRequired,
  onDeleteTask: Proptypes.func.isRequired
};
