import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Comments from "./components/Comments";
import Tasks from "./components/Tasks";
import Orders from "./components/Orders";
import Tickets from "./components/Tickets";
import AreaChart from "./components/AreaChart";
import DonutChart from "./components/DonutChart";
import TaskPanel from "./components/TaskPanel";
import TransactionsPanel from "./components/TransactionsPanel";

import PropTypes from "prop-types";

function App(props) {
  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">

          <TopNav messages={props.messages} />
          <SideNav />

        </nav>

        <div id="page-wrapper">

          <div className="container-fluid">

            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        Dashboard <small>Statistics Overview</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li className="active">
                            <i className="fa fa-dashboard"></i> Dashboard
                        </li>
                    </ol>
                </div>
            </div>

            <div className="row">

              <Comments newComments={props.newComments} />
              <Tasks newTasks={props.newTasks} />
              <Orders newOrders={props.newOrders} />
              <Tickets tickets={props.tickets} />

            </div>

            <AreaChart />

            <div className="row">

                <DonutChart />

                <div className="col-lg-4">
                    <TaskPanel tasks={props.tasks} />
                </div>

                <div className="col-lg-4">
                    <TransactionsPanel orders={props.orders} />
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

App.propTypes = {
  taskItem: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
  newComments: PropTypes.number.isRequired,
  newTasks: PropTypes.number.isRequired,
  newOrders: PropTypes.number.isRequired,
  tickets: PropTypes.number.isRequired,
  orders: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  messages: PropTypes.array.isRequired,
};

export default App;
