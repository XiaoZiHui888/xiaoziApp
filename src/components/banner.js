import Swiper from 'react-native-swiper'
import React, { Component } from 'react';
import { sw } from '../utils/screenAdapter';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    URL
} from 'react-native';


export default class Home extends Component {
    state = {
        list: [
            {
                bannerUrl: "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kmh/double11/banner.jpg",
                link: "/packageC/pages/lotteryDraw/lotteryDraw",
                linkType: 1
            },
            {
                bannerUrl: "https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kmh/double11/banner.jpg",
                link: "/packageC/pages/lotteryDraw/lotteryDraw",
                linkType: 1
            }
        ]
    }
    render() {
        let dot = <View style={styles.dot}></View>
        let activeDot = <View style={styles.activeDot}></View>
        return (
            <View style={styles.banner} >
                <Swiper dot={dot} activeDot={activeDot}>
                    {this.state.list.map(item => {
                        return (<TouchableOpacity>
                            <Image style={styles.bannerImage} source={{ uri: item.bannerUrl }}></Image>
                        </TouchableOpacity>)
                    })}
                </Swiper>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray',

    },
    bannerImage: {
        width: sw(355),
        height: sw(180)
    },
    dot: {
        width: 10,
        height: 2,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        marginLeft: 3,
        marginRight: 3
    },
    activeDot: {
        width: 10,
        height: 2,
        backgroundColor: '#D80B2A',
        borderRadius: 2,
        marginLeft: 3,
        marginRight: 3
    }

})


