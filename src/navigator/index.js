import React, { Component } from 'react';
import {

} from 'react-native';
import {
    Root
} from "native-base";
import {
    createAppContainer,
    createSwitchNavigator,
    ThemeColors,
    useTheme,
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';
import NavigationService from './NavigationService';
import Index from '../pages/index/index';

import {
    useScreens
} from 'react-native-screens';
useScreens();



/**
 * 总之，请在使用 React Navigation 导航器注册的页面上使用 SafeAreaView `组件。
 * Android 缺口使用react-native-device-info 
 * if (Platform.OS === 'android' && DeviceInfo.hasNotch())
 * SafeAreaView.setStatusBarHeight
 * Some value for status bar height + notch height 
 */
//YINTODO 123
// const WelcomeStack = createStackNavigator(  //欢迎界面  闪屏页
//     {
//         MLWelcome: {
//             screen: MLWelcomeScreen,
//             navigationOptions: {
//                 header: null
//             }
//         }
//     },
//     {
//         initialRouteName: 'MLWelcome',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//         mode: 'modal',
//         headerMode: 'none',
//     }
// );

// const LoginStack = createStackNavigator(  //登录栈 包含登录界面，忘记密码界面，注册界面
//     {
//         MLLoginScreen: {
//             screen: MLLoginScreen,
//         },
//         MLRegisterScreen: {
//             screen: MLRegisterScreen,
//         },
//         MLForgetSercetScreen: {
//             screen: MLForgetSercetScreen,
//         }
//     },
//     {
//         initialRouteName: 'MLLoginScreen',
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: '#f4511e',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 fontWeight: 'bold',
//             },
//         },
//         mode: 'modal',
//         headerMode: 'none',
//     }
// );

const MainStack = createStackNavigator(
    {
        Index: {
            screen: Index,
        }
    },
    {
        initialRouteName: 'Index',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
        mode: 'modal',
        headerMode: 'none',
    }
);

//SwitchNavigator的用途是一次只显示一个页面。 
//默认情况下，它不处理返回操作，并在你切换时将路由重置为默认状态。
// 这是我们希望从身份验证流程中得到的确切行为：
//当用户登录时，我们希望丢弃身份验证流程的状态并卸载所有页面；
//当我们按下物理返回键时，我们希望不能够返回到认证页面。
const AppSwitchNavigator = createSwitchNavigator(
    {
        Main: MainStack,
        // Login: LoginStack,
    },
    {
        initialRouteName: 'Main',
    }
)

const AppContainer = createAppContainer(AppSwitchNavigator);

export default () =>
    <Root>
        <AppContainer
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
            // 需要iOS 13才能真正通过系统设置切换黑暗模式。
            // react-native-appearance
            theme="light"  //`theme` can be `light` or `dark`. It defaults to `light` if not specified.
        />
    </Root>;
