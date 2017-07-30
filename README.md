### Setup
* xFork, Clone, yarn install, yarn start
* xUse your checklist of how to make react components, use state and use events.

### Create components
* xIn App.js, do a find for comments that look like `{/*   <TopNav>   */}  {/*   </TopNav>   */}`
* xSearch for the name of the component you are attempting to make
* xThis will indicate where the component should start and end
* xCut out the code between the comments and put in its own file
* xCreate .js files for each component. Make sure to name it the same as the component.

### Components
* xTopNav (already made)
* xSideNav
* xComments
* xTasks
* xOrders
* xTickets
* xAreaChart
* xDonutChart
* xTasksPanel
* xTransactionsPanel
* xMessagePreview (which is in TopNav)
* xDateTime (which is in MessagePreview)
* xTaskItem (which is in TaskPanel)
* xTransactionRow (which is in TransactionsPanel)

### Import and use components where appropriate
* This is SOP from checklist.
* Think of the import as creating a new html element
* `import TopNav from "./components/TopNav"`
* Think of TopNav now being an HTML element you can use
* imagine if you did `import div from “./components/div”`
* If you want that div to show up on the page, what do you do? Its the same thing with components
* `<div />` is the same as `<TopNav />`
* Replace the comments with the actual usage of the components (custom element)

### Props
* After looking in index.js, in App.js add PropTypes for each prop that index is giving to App
* We do not want to have to look in index.js to see what props App has. We should just be able to look in App
* Pass the newComments prop from App to Comments
* Pass the newTasks prop from App to Tasks
* Pass the newOrders prop from App to Orders
* Pass the tickets prop from App to Tickets
* Pass the orders prop from App to TransactionPanel
* Pass the messages prop from App to TopNav
* Pass the tasks prop from App to TaskPanel

### Prop Types
* TransactionRow should require one prop called "order" that is an object
* TaskItem should require one prop called "task" that is an object
* MessagePreview should require one prop called "message" that is an object
* TopNav should require one prop called "messages" that is an array
* TransactionPanel should require one prop called "orders" that is an array
* TasksPanel should require one prop called "tasks" that is an array

### Use Props
* TaskItem should use the task prop to populate the task name and the date
* TransactionRow should use the order prop to populate the `<td>` s
* MessagePreview should use the message prop to populate the name, date and message text

### Mapping
* TasksPanel - map the array of "tasks" into array of TaskItem's. Pass one task into TaskItem
* TopNav - map the array of "messages" into array of MessagePreview's. Pass one message into MessagePreview
* TransactionPanel - map the array of "orders" into array of TransactionRow's. Pass one order into TransactionRow
