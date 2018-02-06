import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { APIKEY, AUTHDOMAIN, DATABASEURL, PROJECTID, STORAGEBUCKET, MESSAGINGSENDERID } from 'react-native-dotenv'
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
        <View>
          <Text>
            Hello, Manager!
          </Text>
        </View>
    );
  }
}

export default App;
