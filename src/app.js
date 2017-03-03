import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAZgRtWIiRnIr5SiuaIZi0ULuHEBz0Pa-g',
            authDomain: 'auth-b0e78.firebaseapp.com',
            databaseURL: 'https://auth-b0e78.firebaseio.com',
            storageBucket: 'auth-b0e78.appspot.com',
            messagingSenderId: '850432811415'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
