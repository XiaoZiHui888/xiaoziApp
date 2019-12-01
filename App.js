/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { Router, Scene, Stack, Tabs, Modal } from 'react-native-router-flux';
import { View, Image } from 'react-native';
import Index from './src/pages/index/index';
import Login from './src/pages/login/index';
import Welcome from './src/pages/welcome/index';
import Me from './src/pages/me/index';
import AboutMe from './src/pages/aboutMe/index';
import Agreement from './src/pages/agreement/index';
import CreditCardInput from './src/pages/creditCardInput/index';
import CreditCardAdd from './src/pages/creditCardAdd/index';
import CardBindSuccess from './src/pages/cardBindSuccess/index';
import MyCards from './src/pages/myCards/index';

import { Root } from 'native-base';



const TabIconth = ({ focused, title}) => {
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

      <Image style={{ width: 20, height: 20,resizeMode:'contain' }} source={item.icon} />

    );
  } else {
    return (
      <Image style={{ width: 20, height: 20,resizeMode:'contain'}} source={item.activeIcon} />

    );

  }
}

const App = () => {
  return (
    <Root>
    <Router>
      <Modal key="root" hideNavBar>


      <Stack key="root" hideNavBar>
          <Scene key="myCards" component={MyCards} title="银行卡管理" navBarButtonColor="black" hideNavBar={false}/>
          <Scene key="cardBindSuccess" component={CardBindSuccess} title="绑卡签约" navBarButtonColor="black" hideNavBar={false}/>
          <Scene key="creditCardAdd" component={CreditCardAdd} title="绑定信用卡" navBarButtonColor="black" hideNavBar={false}/>
          <Scene key="creditCardInput" component={CreditCardInput} title="绑定信用卡" navBarButtonColor="black" hideNavBar={false}/>
          <Tabs key="tabbar" activeTintColor='#FFCB00' hideNavBar>
          <Scene key="index" component={Index} title="首页" icon={TabIconth}/>
          <Scene key="me" component={Me} title="我的" icon={TabIconth} navTransparent='true' navBarButtonColor='rgba(0,0,0,0)'/>
          </Tabs>
          <Scene key="aboutMe" component={AboutMe} title="关于我们" navBarButtonColor="black" hideNavBar={false}/>
      </Stack>

 

      <Scene>
      <Scene key="login" component={Login} title="登录" navBarButtonColor="black" hideNavBar={false} />
          <Scene key="welcome" component={Welcome} hideNavBar />
          <Scene key="agreement" component={Agreement} title="用户协议和隐私政策" navBarButtonColor="black" />
      </Scene>


      </Modal>
    </Router>
    </Root>
  );
};

export default App;
