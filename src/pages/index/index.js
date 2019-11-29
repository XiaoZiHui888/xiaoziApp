import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    SectionList,
    FlatList
} from 'react-native';
import { sw } from '../../utils/screenAdapter';
import { Actions } from 'react-native-router-flux';
import Banner from '../../components/banner'
import IconList from '../../components/iconList';
import ClassifyList from './classifyList'



export default class Home extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.page}>
                {/* 搜索 */}
                <TouchableOpacity style={styles.searchBar} onPress={this.onPushToSearch}>
                    <Image style={styles.searchBarIcon} source={require('../../assets/search.png')}></Image>
                    <Text style={styles.searchBarTitle}>输入你想分享的商品关键字</Text>
                </TouchableOpacity>
                {/* banner */}
                <View style={styles.banner}><Banner /></View>
                {/* 展位图 */}
                <View style={styles.placeholder}>
                    <Image style={styles.placeholderImage} source={require('../../assets/home_zhengpinbaozhang.png')}></Image>
                </View>
                {/* 菜单 */}
                <View style={styles.iconList}>
                    <IconList />
                </View>
                {/* 图片组图 */}
                <View style={styles.imageGroup}>
                    <TouchableOpacity>
                        <Image style={styles.imageGroupRightImage} source={{ uri: 'https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kmh/selfshop/prefecture_img1.png' }}></Image>
                    </TouchableOpacity>
                    <View style={styles.imageGroupRight}>
                        <TouchableOpacity>
                            <Image style={styles.imageGroupTopImage} source={{ uri: 'https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kmh/selfshop/prefecture_img2.png' }}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.imageGroupBottomImage} source={{ uri: 'https://kshop-pro-data.oss-cn-hangzhou.aliyuncs.com/kmh/selfshop/prefecture_img3.png' }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 分类 */}
                <View style={styles.classifyList}>
                    <ClassifyList />
                </View>

            </ScrollView >


        );
    }
    onPushToSearch() {
        Actions.push('search')
    }
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    searchBar: {
        marginTop: 7.5,
        width: sw(355),
        height: sw(40),
        backgroundColor: '#F6f6f6',
        borderRadius: sw(20),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchBarIcon: {
        width: sw(18),
        height: sw(18),
        marginLeft: sw(16),
    },
    searchBarTitle: {
        marginLeft: 8.5,
        color: '#A3A3A3',
        fontSize: 14,

    },
    banner: {
        marginTop: sw(7.5),
        width: sw(355),
        height: sw(180),
        borderRadius: 10,
        overflow: 'hidden'
    },
    placeholder: {
        width: '100%',
        display: 'flex',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholderImage: {
        width: sw(236),
        height: sw(13)
    },
    iconList: {
        marginTop: 18,
    },
    imageGroup: {
        marginTop: 30,
        marginRight: sw(10),
        marginLeft: sw(10),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageGroupRightImage: {
        width: sw(171),
        height: sw(151),
    },
    imageGroupRight: {
        width: sw(179),
        display: 'flex',
        justifyContent: 'space-between',
        height: sw(151),
        marginLeft: sw(5)

    },
    imageGroupTopImage: {
        width: sw(179),
        height: sw(73),
        backgroundColor: '#F7F7F7'
    },
    imageGroupBottomImage: {
        width: sw(179),
        height: sw(73),
    },
    classifyList: {
        marginTop: sw(21.5),
        backgroundColor: 'white'
    }

});
