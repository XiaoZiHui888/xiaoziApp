import React, { Component } from 'react';
import WebView from 'react-native-webview';

export default class Agreement extends Component {
  render() {
    return (
      <WebView source={{ uri: 'https://xjalyn.github.io/kunchi/user_agreement.html' }}>

      </WebView>
    );
  }
}