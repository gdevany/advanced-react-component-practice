import React from 'react';
import TaskItem from './TaskItem';
import PropTypes from "prop-types";


function TaskPanel(props) {

  const taskItem = props.tasks.map((task) => {
    return <TaskItem task={task} key={task.id}/>;
  })


  return(
    <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
        </div>
        <div className="panel-body">
            <div className="list-group">

                {taskItem}

            </div>
            <div className="text-right">
                <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
            </div>
        </div>
    </div>
  )
}

TaskPanel.PropTypes = {
  tasks: PropTypes.array.isRequired
}

export default TaskPanel;
