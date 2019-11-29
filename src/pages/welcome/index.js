import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper'
import { sw, sh } from '../../utils/screenAdapter';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {

    render() {
        let dot = <View style={{ backgroundColor: 'rgba(255,255,255,0.7)', width: 7, height: 3, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: sw(223) }} />
        let activeDot = <View style={{ backgroundColor: 'white', width: 12, height: 3, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: sw(223), }} />
        return (
            <Swiper dot={dot} activeDot={activeDot}>
                <View style={styles.slide1}>
                    <Image style={styles.image} source={require("../../assets/welcome/3.png")}></Image>
                </View>
                <View style={styles.slide2}>
                    <Image style={styles.image} source={require("../../assets/welcome/3.png")}></Image>
                </View>
                <View style={styles.slide3}>
                    <Image style={styles.image} source={require("../../assets/welcome/3.png")}></Image>
                    <TouchableOpacity style={styles.btn} onPress={this.onPushToLogin}>
                        <View><Text style={styles.btnText}>立即体验</Text></View>
                    </TouchableOpacity>
                </View>
            </Swiper >
        );
    }
    onPushToLogin() {
        Actions.push('login')
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DB0122',

    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DB0122',

    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DB0122'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width: sw(375),
        height: sw(665),
        resizeMode: 'stretch'
    },
    btn: {
        position: 'absolute',
        bottom: 100,
        left: sw(82.5),
        height: 54,
        borderRadius: 27,
        color: 'white',
        width: sw(210),
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: sw(22)
    }
})