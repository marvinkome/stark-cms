# Stark Dashboard

This is the dashboard that powers the Stark CMS. Built with ReactJS and
bootstrapped using [Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

## Getting started locally

To get started developing locally, run the following commands:

```bash
cd client
yarn install
yarn dev
```

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Folder Structure

The `src` folder contains all the source code. Inside this folder has the

-   `store` - For store/state management
-   `lib` - For helpers and reusable modules (eg: apollo configurations)
-   `components` - For reusable components
-   `pages` - For holding each page

Each component should be structured in this format:

`PageA`-
`index.js` - The main file
`style.scss` - The main style file

### Styling

The root styles folder will contain all mixins and variables, and can be imported like this:
`@import 'styles/_variables.scss'`

Reference: [Adding a sass stylesheets](https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet)

### Assets

The root folder will container `assets` folder which will contain all images and files used in
mulitple components

## Page route structure

The `pages/index.js` file contains the top level routes. This includes;

-   `/login` - the login page for the dashboard and the main site
-   `/admin` - the main wrapper for the dashboard this page has it sub-views;
    -   `/` - this renders the dashboard page
    -   `/posts` - this renders the posts pages
-   `/` - this page is for the main site. This page will be used to render the main website

## TODO - Add more documentation
