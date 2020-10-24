# ToDo App

## Business Requirements
* The To Do Manager application has the following overall requirements:

    * Designed to match the mock-up
        * Header, Main Section Footer
        * Use React Bootstrap for styling and visual components
* The header should present the application title and main menu
    * Home Link, which shows the list of To Do Items as noted below
    * A Login/Register/User section
        * When a user is not logged in:
            * Show Login and Register links
                * Login: Renders a Login Form
                * Register: Renders a new user registration form
                    * Require Fields:: Username, Password, Email, Role
            * When a user is logged in:
                * Show “Welcome username”
                * Show a “Logout” link
                    * When clicked, this should remove any cookies you have set and remove access
* In the “Main” section
    * Nothing should be visible until a user has logged in successfully
    * The list of items in the to do list
        * Based on user preferences, show listings in groups of (5, 10, etc) and provide the ability to view multiple “pages” of results
        * Each item in list should show the text of the item as well as the assignee
            * Based on user preferences, hide or show completed items
            * If shown, completed items should be styled differently making their status visually obvious
        * For users with “Update” permissions
            * When an item is clicked, toggle the “complete” status of the item.
        * For users with “Delete” permissions
            * Items should have a delete button associated with them
                * When clicked, remove the item from the list
    * For users with “Create” permissions …
        * **A Form where the user can a new item to the todo list**
            * Items should have the following fields:
                * To Do Item Text
                * Assigned To
                * Status (complete/incomplete)
                * Difficulty (number between 1 and 5)

### UML :

![](.//assets/hooksUML.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
