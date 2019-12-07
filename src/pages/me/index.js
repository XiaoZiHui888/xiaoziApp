import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { sw } from '../../utils/screenAdapter';
import { TouchableOpacity } from 'react-native-gesture-handler';




export default class Me extends Component {

  // myCards

  header(){
    return (
      <ImageBackground style={styles.header} source={require("../../assets/me_head_bg.png")}>
        <View style={styles.userInfo}>
          <Image style={styles.userInfoImage}></Image>
          <View style={styles.userInfoRight}>
            <View style={styles.userInfoTop}>
              <Text style={styles.userInfoName}>用户姓名</Text>
              <Image style={styles.userInfoRank}></Image>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
  upgrade (){
    return (
      <View style={styles.upgrade}>
        <Image style={styles.upgradeIcon} source={require('../../assets/vip_up.png')}></Image>
        <View style={styles.upgradeMid}>
        <Text style={styles.upgradeTitle1}>升级VIP会员 享特权</Text>
        <Text style={styles.upgradeTitle2}>信用卡取备用金/智能还款率全国最低</Text>
        </View>
        <TouchableOpacity style={styles.upgradeBtn}>
          <Text style={styles.upgradeBtnTitle}>去看看</Text>
        </TouchableOpacity>
      </View>
    )
  }
  income (){
    return (
      <View style={styles.income}>
        <TouchableOpacity style={styles.incomeItem}>
          <View style={styles.icomeItemRight}>
            <Text style={styles.incomeItemTitle1}>分享赚钱</Text>
            <Text style={styles.incomeItemTitle2}>他刷卡你赚钱</Text>
          </View>
          <Image style={styles.incomeItemImg} source={require("../../assets/me_share_img.png")}></Image>
        </TouchableOpacity>
        <View style={styles.incomeLine}></View>
  
        <TouchableOpacity style={styles.incomeItem}>
          <View style={styles.icomeItemRight}>
            <Text style={styles.incomeItemTitle1}>分享赚钱</Text>
            <Text style={styles.incomeItemTitle2}>他刷卡你赚钱</Text>
          </View>
          <Image style={styles.incomeItemImg} source={require("../../assets/me_balance_img.png")}></Image>
        </TouchableOpacity>
      </View>
    )
  }
  
  cell(name,event){
    return (
      <TouchableOpacity style={styles.cell} onPress={event}>
        <Text style={styles.cellTitle3}>{name}</Text>
        <Image style={styles.cellImage} source={require("../../assets/arrow_right.png")} />
        <View style={styles.cellLine}></View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.page}>
        {this.header()}
        {this.upgrade()}
        {this.income()}
        <View style={styles.cellList}> 
        {cell('我的银行卡',this.onPushToMyCards.bind(this))}
        {cell('常见问题',this.onPushToQuestions.bind(this))}
        {cell('设置',this.onPushToSetting.bind(this))}
        </View>
      </ScrollView>
    );
  }
  onPushToMyCards(){
    Actions.push("myCards")
  }
  onPushToQuestions(){

  }
  onPushToSetting(){

  }

}

let styles = StyleSheet.create({
  page: {
    alignItems: "center"
  },
  header: {
    width: sw(375),
    height: sw(148),
  },
  userInfo: {
    marginTop: sw(66),
    width: sw(375),
    display: "flex",
    alignItems: "center",
    flexDirection: 'row'
  },
  userInfoImage: {
    width: sw(60),
    height: sw(60),
    marginLeft: sw(16),
    borderRadius: sw(30),
    backgroundColor: 'white'
  },
  userInfoRight: {
    marginLeft: sw(8)
  },
  userInfoTop: {
    flexDirection: 'row',
    alignItems: "center",
  },
  userInfoName: {
    fontSize: sw(17),
    fontWeight: 'bold',
    color: '#1C1D21',
    marginLeft: 2
  },
  userInfoRank: {
    width: sw(62),
    height: sw(18),
    resizeMode: 'contain'
  },
  userInfoDate: {
    fontSize: sw(14),
    color: 'white'
  },
  cell: {
    width: sw(343),
    height: sw(50),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 8
  },
  cellTitle1: {
    fontSize: sw(14),
    color: '#333',
    marginLeft: sw(12.5)
  },
  cellTitle3: {
    fontSize: sw(14),
    color: '#333',
    marginLeft: sw(12.5),
    flex: 1
  },
  cellTitle2: {
    fontSize: sw(16),
    color: '#DF3852',
    fontWeight: 'bold'
  },
  cellImage: {
    width: sw(13),
    height: sw(13),
    marginRight: sw(14)
  },
  cellLine:{
   position: 'absolute',
   bottom:0,
   left:sw(15),
   right:sw(15),
   height:1,
   backgroundColor:'#E8E8E8'
  },

  upgrade:{
    marginTop:sw(-10),
   width:sw(345),
   height:sw(70),
   flexDirection:'row',
   alignItems:'center',
   backgroundColor:'#fff',
   borderRadius:8
  },
  upgradeIcon:{
    width:sw(36),
    height:sw(32),
    marginLeft:sw(10)
  },
  upgradeMid:{
    marginLeft:sw(8),
    flex:1
  },
  upgradeTitle1:{
    color:'#404040',
    fontSize:sw(16),
    fontWeight:'bold'
  },
  upgradeTitle2:{
    color:'#999999',
    fontSize:sw(12)
  },
  upgradeBtn:{
    width:sw(60),
    height:sw(27),
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginRight:sw(10),
    borderRadius:sw(14),
    borderColor:'#DBAE64',
    borderWidth:1
  },
  upgradeBtnTitle:{
    color:'#DBAE64',
    fontSize:sw(12)
  },
  income:{
    marginTop:sw(10),
    borderRadius:sw(8),
     width:sw(345),
     height:sw(70),
     display:'flex',
     alignItems:'center',
     backgroundColor:'#fff',
     flexDirection:'row',
     justifyContent:'space-around'
  },
  incomeItem:{
 
   flexDirection:'row',
   alignItems:'center',
   flex:1
  },
  incomeItemImg:{
    marginLeft:sw(13),
   width:sw(50),
   height:sw(50)
  },
  incomeLine:{
    height:sw(38),
    width:1,
    backgroundColor:'#E8E8E8'
  },
  incomeItemTitle1:{
    color:'#404040',
    fontSize:sw(16),
    fontWeight:'bold'
  },

  incomeItemTitle2:{
    color:'#999999',
    fontSize:sw(12)
  },
  icomeItemRight:{
    marginLeft:sw(15)
  },
  cellList:{
    marginTop:sw(10),
    backgroundColor:'#fff',
    borderRadius:8

  }

})
