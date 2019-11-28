/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import {Router, Scene, Stack, Tabs, Modal} from 'react-native-router-flux';
import Index from './src/pages/index/index';
import Login from './src/pages/login/index';
import Me from './src/pages/me';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Tabs key="tabbar" hideNavBar>
          <Scene key="index" component={Index} title="首页" />
          <Scene key="me" component={Me} title="我的" />
        </Tabs>
        <Scene key="login" component={Login} title="登录" />
      </Stack>
    </Router>
  );
};

export default App;
