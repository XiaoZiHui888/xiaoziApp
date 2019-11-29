import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    TouchableHighlight
} from 'react-native';
import { sw } from '../../utils/screenAdapter';
import { white } from 'ansi-colors';

class Item extends Component {
    render() {
        return (<TouchableHighlight>
            <View style={styles.item}>
                <Image style={styles.itemImage} source={{ uri: 'http://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/product/100601488200/m1.png' }}></Image>
                <Text style={styles.itemTitle1}>吕滋养韧发密强水吕滋养韧发密强水…</Text>
                <Text style={styles.itemTitle2}>已售8989件</Text>
                <View style={styles.itemBottom}>
                    <Text style={styles.itemBottomTitle1}>¥122.33备份 8</Text>
                    <TouchableHighlight style={styles.itemBottomImageWrap}>
                        <Image style={styles.itemBottomImageWrapIcon}></Image>
                    </TouchableHighlight>
                </View>
            </View>
        </TouchableHighlight>)
    }
}

export default class YouLike extends Component {
    render() {
        return (
            <View>
                <Image style={styles.header} source={{ uri: 'https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kmh/selfshop/banner_rexiao.png' }}></Image>

                <FlatList contentContainerStyle={styles.list}
                    horizontal={true}
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Item></Item>}
                />
            </View>
        );
    }
}
let styles = StyleSheet.create({
    header: {
        width: sw(355),
        height: sw(115),
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    classify: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    item: {
        display: "flex",
        width: sw(110),
        height: sw(213),
        marginRight: sw(15.5)
    },
    itemImage: {
        width: sw(110),
        height: sw(110),
        marginTop: sw(10),
        backgroundColor: '#fefefe'
    },
    itemTitle1: {
        marginTop: sw(5),
        color: '#505050',
        fontSize: sw(12),
        height: sw(33),
        overflow: "hidden",

    },
    itemTitle2: {
        marginTop: sw(1),
        color: '#999999',
        fontSize: sw(11)
    },
    itemBottom: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        width: sw(110),
        justifyContent: 'space-between',

    },
    itemBottomTitle1: {
        color: '#505050',
        fontSize: sw(11),
        fontWeight: 'bold'

    },
    itemBottomImageWrap: {
        width: sw(23),
        height: sw(23)
    },
    itemBottomImageWrapIcon: {
        width: sw(23),
        height: sw(23),
        backgroundColor: 'gray'
    },
    list: {
        marginTop: 0,
        height: sw(213),
        width: sw(355)
    }
})
