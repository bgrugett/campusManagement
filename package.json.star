{
  "name": "campus_management",
  "version": "0.0.1",
  "description": "A review time project",
  "main": "index.js",
  "scripts": {
    "test": "mocha **/*.test.js *.test.js",
    "build": "webpack",
    "build-watch": "webpack -w",
    "start": "nodemon server/start.js"
  },
  "keywords": [
    "react",
    "redux",
    "skeleton"
  ],
  "dependencies": {
    "body-parser": "*" ,
    "chalk": "*" ,
    "express": "*" ,
    "pg": "*" ,
    "pg-native": "*" ,
    "react": "*" ,
    "react-dom": "*" ,
    "react-redux": "*" ,
    "react-router": "*" ,
    "redux": "*" ,
    "redux-logger": "*" ,
    "redux-thunk": "*" ,
    "sequelize": "*"
  },
  "devDependencies": {
    "babel": "*" ,
    "babel-core": "*" ,
    "babel-loader": "*" ,
    "babel-preset-es2015": "*" ,
    "babel-preset-react": "*" ,
    "volleyball": "*" ,
    "webpack": "*"
  }
}
