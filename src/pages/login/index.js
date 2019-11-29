import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { sw } from '../../utils/screenAdapter'
import { Actions } from 'react-native-router-flux';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.page}>
                <Image style={styles.icon} source={require('../../assets/logo.png')}></Image>
                <Text style={styles.title}>钱多赚一点,生活好一点</Text>
                <TouchableOpacity onPress={this._onPressButton} style={styles.btn1}>
                    <Image
                        style={styles.btnIcon1}
                        source={require('../../assets/wx_icon.png')}
                    />
                    <Text style={styles.btnTitle}>微信登录</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={this._onPressButton} style={styles.btn2}>
                    <Image
                        style={styles.btnIcon2}
                        source={require('../../assets/phone_icon.png')}
                    />
                    <Text style={styles.btnTitle}>微信登录</Text>
                </TouchableOpacity>
                <View style={styles.agressment}>
                    <Text style={styles.text1}>登录即表示已经阅读并同意</Text>
                    <TouchableOpacity onPress={this.onPushToAgressment}>
                        <Text style={styles.text2}>《用户协议》</Text>
                    </TouchableOpacity>

                    <Text style={styles.text1}>和</Text>
                    <TouchableOpacity onPress={this.onPushToAgressment}>
                        <Text style={styles.text2}>《隐私说明》</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
    _onPressButton() {
        Actions.replace("tabbar")
    }
    // 跳转到用户协议
    onPushToAgressment() {
        Actions.push('agreement')
    }
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        flex: 1
    },
    icon: {
        width: sw(80),
        height: sw(80),
        marginTop: sw(100),
    },
    title: {
        marginTop: sw(21),
        fontSize: 14,
        color: '#5E5E5E'
    },
    btn1: {
        marginTop: sw(76),
        width: sw(250),
        height: sw(50),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#18A50C',
        flexDirection: 'row',
        borderRadius: sw(25)
    },
    btn2: {
        marginTop: sw(15),
        width: sw(250),
        height: sw(50),
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#D80B2A',
        borderRadius: sw(25)
    },
    btnTitle: {
        marginRight: 6.5,
        color: 'white',
        fontSize: sw(15),
        marginLeft: sw(7.5)
    },
    btnIcon1: {
        width: sw(20),
        height: sw(17)

    },
    btnIcon2: {
        width: sw(17),
        height: sw(20)
    },
    agressment: {
        marginTop: sw(15),
        flexDirection: 'row',
        alignItems: "center"
    },
    text1: {
        fontSize: sw(12),
        color: '#999'
    },
    text2: {
        fontSize: sw(12),
        color: '#D80B2A'
    }

});
