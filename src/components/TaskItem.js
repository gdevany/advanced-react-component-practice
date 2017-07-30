import React from 'react';
import PropTypes from "prop-types";


function TaskItem() {
  return(
    <a href="#" className="list-group-item">
        <span className="badge">just now</span>
        <i className="fa fa-fw fa-calendar"></i> Calendar updated
    </a>
  )
}

TaskItem.PropTypes = {
  task: React.PropTypes.object.isRequired
}

export default TaskItem;
