import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID } from 'react-native-dotenv'
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: APIKEY,
      authDomain: AUTHDOMAIN,
      databaseURL: DATABASEURL,
      projectId: PROJECTID,
      storageBucket: STORAGEBUCKET,
      messagingSenderId: MESSAGINGSENDERID
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
