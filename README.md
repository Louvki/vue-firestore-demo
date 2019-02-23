# vue-firestore-demo
A small application showcasing some of vues functionality. Also hooked up firestore with vuex.
This app is based on the vue-mastery course (https://github.com/Code-Pop/vue-mastery).

## Project setup
Go to db.js file and change the config object with the one you get when you intialize your database
```
const config = {
  apiKey: 'yourKey',
  authDomain: 'yourKey',
  databaseURL: 'yourKey',
  projectId: 'yourKey',
  storageBucket: 'yourKey',
  messagingSenderId: 'yourKey',
};
```

Run npm install to install all the dependencies
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
