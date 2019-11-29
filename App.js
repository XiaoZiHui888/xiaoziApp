/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { Router, Scene, Stack, Tabs, Modal } from 'react-native-router-flux';
import Index from './src/pages/index/index';
import Login from './src/pages/login/index';
import Welcome from './src/pages/welcome/index';
import Me from './src/pages/me/index';
import AboutMe from './src/pages/aboutMe/index';
import Search from './src/pages/search/index';
import Agreement from './src/pages/agreement/index';
import { View, Image } from 'react-native';

const TabIconth = ({ focused, title }) => {
  let list = {
    '首页': {
      icon: require('./src/assets/home.png'),
      activeIcon: require('./src/assets/home_press.png')
    },
    '我的': {
      icon: require('./src/assets/me.png'),
      activeIcon: require('./src/assets/me_press.png')
    }
  }
  let item = list[title]
  if (!focused) {
    return (

      <Image style={{ width: 20, height: 20 }} source={item.icon} />

    );
  } else {
    return (
      <Image style={{ width: 20, height: 20 }} source={item.activeIcon} />

    );

  }
}

const App = () => {
  return (
    <Router>
      <Modal key="root" hideNavBar>
        <Scene>
          <Scene key="welcome" component={Welcome} hideNavBar />
          <Scene key="login" component={Login} title="登录" navBarButtonColor="black" hideNavBar={false} />

          <Scene key="agreement" component={Agreement} title="用户协议和隐私政策" navBarButtonColor="black" />
        </Scene>
        <Stack key="root">
          <Tabs key="tabbar" activeTintColor='#D80B2A' hideNavBar>
            <Scene key="me" component={Me} title="我的" icon={TabIconth} />
            <Scene key="index" component={Index} title="首页" icon={TabIconth} />

          </Tabs>
          <Scene key="aboutMe" component={AboutMe} title="关于我们" navBarButtonColor="black" />
          <Scene key="search" component={Search} title="搜索" navBarButtonColor="black" />
        </Stack>

      </Modal>
    </Router>
  );
};

export default App;
