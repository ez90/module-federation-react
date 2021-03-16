# Webpack 5 Module Federation with React

This example shows a basic host application loading remote components

For more information, visit the article explaining this workflow

- `app1` is a child app component and Have his own router and display simple html
- `app2` is a child app component and display simple html
- `main` is the main app using exposed components. it Has his own router

## Running Demo

Run `npm install` and `npm start` inside each repo respectively. This will build and serve your apps on ports 3001, 3002

- [localhost:3001](http://localhost:3001/) (expose component for import)
- [localhost:3002](http://localhost:3002/) (expose component for import)
- [localhost:3003](http://localhost:3003/) (will import exposed component)


## Running Demo
// Basic app
```
npm install --save-dev @babel/core @babel/preset-react babel-loader bundle-loader html-webpack-plugin serve webpack webpack-cli webpack-dev-server
npm install --save react react-dom
```

// To have router
```
npm install react-router-dom
```

// To have redux
```
npm --save install redux react-redux
```




