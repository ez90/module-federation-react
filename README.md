# Webpack 5 Module Federation with React

This example shows a basic host application loading remote components

Here is the components roles :

- `app1` is a child app component and Have his own router and display simple html
- `app2` is a child app component and display simple html. It can use redux store main (passed by props or local store)
- `main` is the main app using exposed components. it Has router and redux store.

## Running Demo

Run `npm install` and `npm start` inside each repo respectively. This will build and serve your apps on ports 3001, 3002, 3003

- [localhost:3001](http://localhost:3001/) (expose component for import)
- [localhost:3002](http://localhost:3002/) (expose component for import)
- [localhost:3003](http://localhost:3003/) (will import exposed component)


## For convenience: Command to install components libs

Skeleton folder can be use as boilerplate.

```
// Basic empty components
npm install --save-dev @babel/core @babel/preset-react babel-loader bundle-loader html-webpack-plugin serve webpack webpack-cli webpack-dev-server
npm install --save react react-dom
```

```
// Add router feature to component
npm install react-router-dom
```


```
// Add redux feature to component
npm --save install redux react-redux
```




