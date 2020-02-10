# Keytree Frontend Coding Challenge

### Problem statement

Create an UI web application that retrieves and displays the user repositories and organisations in Github.

### Technologies Used

The main library powering the UI:
  - React - 16.12.0

Design library used
  - Material-UI

### Installation

One way to run this locally would be to clone this application using git and then running it with npm.
The project requires - Node v10.16 or greater for it to run locally.

```sh
$ git clone https://github.com/SiddharthMantri/repo-browser.git
$ cd repo-browser
$ npm install
$ npm start
```
This will open a browser at http://localhost:3000/


### File Structure
The `src` folder is composed of the main parts of the app - Api, Components, Domain, Hooks, Models and State. 

- api - contains the XHR requests for the UI
- components - contains the reusable components of the UI markup. 
- domain - contains the main views that comprise of multiple components and are put together to form the main UI 
- hooks - contains a custom hooks that hook onto the app state
- types - contains a single file with all the typescript types for the project


### Future improvements (Step 5)
- Implement integration testing using a tool like Cypress. I have experience with cypress. If you do need demos, let me know. 
