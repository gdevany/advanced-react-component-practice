### Setup
* Fork, Clone, yarn install, yarn start
* Use your checklist of how to make react components, use state and use events.

### Create components
* In App.js, do a find for comments that look like `{/*   <TopNav>   */}  {/*   </TopNav>   */}`
* Search for the name of the component you are attempting to make
* This will indicate where the component should start and end
* Cut out the code between the comments and put in its own file

### Components
* TopNav (already made)
* SideNav
* Comments
* Tasks
* Orders
* Tickets
* AreaChart
* DonutChart
* TasksPanel
* TransactionsPanel
* MessagePreview (which is in TopNav)
* DateTime (which is in MessagePreview)
* TaskItem (which is in TaskPanel)
* TransactionRow (which is in TransactionsPanel)

### Import and use components where appropriate
* This is SOP from checklist.
* Think of the import as creating a new html element
* imagine if you did `import div from “./components/div”`
* If you want that div to show up on the page, what do you do? Its the same thing with components
* Replace the comments with the actual usage of the components (custom element)
* Using means type the component tag into the code so that it shows up in the web page

### Props
* After looking in index.js, in App.js add PropTypes for each prop that index is giving to App
* We do not want to have to look in index.js to see what props App has. We should just be able to look in App
* Pass the newComments prop from App to Comments
* Pass the newTasks prop from App to Tasks
* Pass the newOrders prop from App to Orders
* Pass the tickets prop from App to Tickets
* Pass the dateTime prop from App to TopNav to MessagePreview to DateTime
* Pass the taskItem prop from App to TaskPanel to TaskItem
* Pass the orders prop from App to TransactionPanel


