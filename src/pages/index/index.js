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
    FlatList,
    ImageBackground
} from 'react-native';
import { sw } from '../../utils/screenAdapter';
import { Actions } from 'react-native-router-flux';

// 顶部菜单
const menuList = () => {
    let list = [
        { title: '分享赚钱', icon: require('../../assets/home_icon1.png') },
        { title: 'VIP', icon: require('../../assets/home_icon2.png') },
        { title: '代理', icon: require('../../assets/home_icon3.png') },
        { title: '招商', icon: require('../../assets/home_icon4.png') },
        { title: '视频', icon: require('../../assets/home_icon5.png') },
        { title: '直播', icon: require('../../assets/home_icon6.png') },
        { title: '新手', icon: require('../../assets/home_icon7.png') },
        { title: '公告', icon: require('../../assets/home_icon8.png') }
    ]
    return (
        <ImageBackground source={require('../../assets/header_bg.png')} style={styles.menuList}>
                {list.map(item => {
                    return (
                        <TouchableOpacity style={styles.menu}>
                            <Image style={styles.menuIcon} source={item.icon}></Image>
                            <Text style={styles.menuTilte}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ImageBackground>
      
    )
}
// 卡片列表
const cardList = (list = [],self) => {

    return (<View style={styles.cardList}>

        {list.length==0?(<ImageBackground style={styles.card} source={require("../../assets/home_card_bg.png")}>
                
                <View style={styles.cardTop}>
                    <Image style={styles.cardBandIcon} source={require("../../assets/bank_nongye.png")}></Image>
                    <Text style={styles.cardBankName}>农业银行信用卡 [8888]</Text>
                </View>
                <Image style={styles.demoIcon} source={require("../../assets/home_demo.png")}></Image>
                <View style={styles.cardWithDraw} >
                    <Text style={styles.cardWithDrawTitle}>取备用金</Text>
                </View>
                <View style={styles.repay}>
                    <Text style={styles.repayText}>智能还款</Text>
                </View>
            </ImageBackground>):<></>}

        {list.map(item => {
            return (
                <ImageBackground style={styles.card} source={require("../../assets/home_card_bg.png")}>
                    <View style={styles.cardTop}>
                        <Image style={styles.cardBandIcon} source={require("../../assets/bank_nongye.png")}></Image>
                        <Text style={styles.cardBankName}>农业银行信用卡 [8888]</Text>
                    </View>
                    <TouchableOpacity style={styles.cardWithDraw} onPress={self.onPushToWidhDraw}>
                        <Text style={styles.cardWithDrawTitle}>取备用金</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.repay} onPress={self.onPushToRepay}>
                        <Text style={styles.repayText}>智能还款</Text>
                    </TouchableOpacity>
                </ImageBackground>
             
            )
        })}
    </View>)
}


export default class Home extends Component {
    state = {
        list:[1,2]
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.page}>
                {/* 顶部导航 */}
                {menuList()}
                <Image source={require("../../assets/card_bg.png")} style={styles.cardBg}></Image>
                {/* 银行卡列表 */}
                {cardList(this.state.list,this)}
                {/* 添加按钮 */}
                <TouchableOpacity style={styles.addCardBtn} onPress={this.onPushToAddCard.bind(this)}>
                    <Text style={styles.addCardBtnTitle}>+添加一张银行卡</Text>
                </TouchableOpacity>
            </ScrollView >
        );
    }
    onPushToWidhDraw(){
      Actions.push('withdraw')
    }
    onPushToRepay(){
      Actions.push('repay')
    }
    onPushToAddCard(){
        
    }
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight:'100%'

    },
    menuList: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        height:sw(160)
    },
    menu: {
        marginTop: sw(30),
        width: sw(93.75),
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuIcon: {
        width: sw(21),
        height: sw(21)
    },
    menuTilte: {
        marginTop: sw(17),
        fontSize: sw(12),
        color: '#333333'
    },
    cardBg: {
        width: '100%',
        height: sw(39)
    },
    cardList:{
     marginTop:0
    },
    card:{
        marginBottom:sw(10),
        width:sw(345),
        height:sw(125),
        backgroundColor:'white'
    },
    cardTop:{
        marginTop:sw(15),
      display:'flex',
      alignItems:'center',
      flexDirection:'row'
    },
    cardBandIcon:{
      marginLeft:sw(20),
      width:sw(36),
      height:sw(36),
      borderRadius:sw(18)
    },
    cardBankName:{
        marginLeft:sw(5),
     fontSize:sw(15),
     color:'#FFEBB7',
     fontWeight:'500'
    },
    demoIcon:{
     position:'absolute',
     right:sw(37),
     top:sw(5),
     width:sw(40),
     height:sw(40)
    },
    cardWithDraw:{
       position: 'absolute',
       left:sw(20),
       bottom:sw(15),
       width:sw(68),
       height:sw(25),
       borderRadius:sw(12.5),
       borderColor:'#FFE195',
       borderStyle:'solid',
       borderWidth:1,
       alignItems:'center',
       justifyContent:'center'

    },
    cardWithDrawTitle:{
      color:'#FFE195',
      fontSize:sw(12)
    },
    repay:{
        position: 'absolute',
        left:sw(96),
        bottom:sw(15),
        width:sw(68),
        height:sw(25),
        borderRadius:sw(12.5),
        borderColor:'#FFFFFF',
        borderStyle:'solid',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    repayText:{
        color:'#FFFFFF',
        fontSize:sw(12)
    },
    addCardBtn:{
     marginTop:sw(10),
     width:sw(345),
     height:sw(50),
     backgroundColor:'#FFCB00',
     alignItems:'center',
     justifyContent:'center',
     marginBottom:sw(20),
     borderRadius:8
    },
    addCardBtnTitle:{
     fontWeight:'bold',
     color:'#FFFFFF',
     fontSize:sw(15),
     
    }

});
