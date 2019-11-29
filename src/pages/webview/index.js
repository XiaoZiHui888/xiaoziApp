import React, { Component } from 'react';
import {
    WebView
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <WebView source={{ uri: 'https://github.com/facebook/react-native' }}>

            </WebView>
        );
    }
}