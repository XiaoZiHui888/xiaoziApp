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
    Image
} from 'react-native';


export default class Home extends Component {
    state = {
        list: [
            { icon: require('../assets/ziying/icon1.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon2.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon3.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon4.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon5.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon6.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon7.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon8.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon9.png'), name: '新品首秀' },
            { icon: require('../assets/ziying/icon10.png'), name: '新品首秀' }
        ]
    }
    render() {
        let dot = <View style={styles.dot}></View>
        let activeDot = <View style={styles.activeDot}></View>
        return (
            <View style={styles.banner} >
                <Swiper dot={dot} activeDot={activeDot}>
                    <View style={styles.container}>
                        {this.state.list.map((item, index) => {
                            return (<TouchableOpacity style={(index == 0 || index == 1) ? styles.itemFirst : styles.item}>
                                <Image style={styles.itemImage} source={item.icon}></Image>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                            </TouchableOpacity>)
                        })
                        }

                    </View>


                </Swiper>
            </View>
        );
    }
}
let styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: sw(170),
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
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        width: sw(50),
        marginBottom: sw(10),
        marginLeft: sw(26)
    },
    itemFirst: {
        display: 'flex',
        alignItems: 'center',
        width: sw(50),
        marginBottom: sw(10),
        marginLeft: sw(10)
    },
    itemImage: {
        width: sw(50),
        height: sw(50),
    },
    itemTitle: {
        marginTop: sw(8),
        fontSize: sw(12),
        color: '#333'
    }
})


