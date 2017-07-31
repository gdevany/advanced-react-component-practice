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
* xThis is SOP from checklist.
* xThink of the import as creating a new html element
* x`import TopNav from "./components/TopNav"`
* xThink of TopNav now being an HTML element you can use
* ximagine if you did `import div from “./components/div”`
* xIf you want that div to show up on the page, what do you do? Its the same thing with components
* x`<div />` is the same as `<TopNav />`
* xReplace the comments with the actual usage of the components (custom element)

### Props
* xAfter looking in index.js, in App.js add PropTypes for each prop that index is giving to App
* xWe do not want to have to look in index.js to see what props App has. We should just be able to look in App
* xPass the newComments prop from App to Comments
* xPass the newTasks prop from App to Tasks
* xPass the newOrders prop from App to Orders
* xPass the tickets prop from App to Tickets
* xPass the orders prop from App to TransactionPanel
* xPass the messages prop from App to TopNav
* xPass the tasks prop from App to TaskPanel

### Prop Types
* xTransactionRow should require one prop called "order" that is an object
* xTaskItem should require one prop called "task" that is an object
* xMessagePreview should require one prop called "message" that is an object
* xTopNav should require one prop called "messages" that is an array
* xTransactionPanel should require one prop called "orders" that is an array
* xTasksPanel should require one prop called "tasks" that is an array

### Use Props
* xTaskItem should use the task prop to populate the task name and the date
* xTransactionRow should use the order prop to populate the `<td>` s
* xMessagePreview should use the message prop to populate the name, date and message text

### Mapping
* xTasksPanel - map the array of "tasks" into array of TaskItem's. Pass one task into TaskItem
* xTopNav - map the array of "messages" into array of MessagePreview's. Pass one message into MessagePreview
* xTransactionPanel - map the array of "orders" into array of TransactionRow's. Pass one order into TransactionRow
