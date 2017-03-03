import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card } from './components/common';
import LoginForm from './components/LoginForm.js';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAZgRtWIiRnIr5SiuaIZi0ULuHEBz0Pa-g',
            authDomain: 'auth-b0e78.firebaseapp.com',
            databaseURL: 'https://auth-b0e78.firebaseio.com',
            storageBucket: 'auth-b0e78.appspot.com',
            messagingSenderId: '850432811415'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        flex: 1
    }
}

export default App;
