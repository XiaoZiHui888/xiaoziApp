import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import {sw} from '../../utils/screenAdapter';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  state = {
    menuList:[{name:"还款记录"},{name:"取备用金"}],
    menuIndex:0
  }
  renderCard(){
   return (   <ImageBackground style={styles.card} source={require("../../assets/card_bg1.png")} resizeMode="cover">
    <Text style={styles.bankName}>广发银行</Text>
    <Text style={styles.cardNum}>6225*****1231</Text>
    <Text style={styles.realName}>磊</Text>
    <View style={styles.cardBottom}>
      <Text style={styles.cardBottomText1}>账单日:9日</Text>
      <Text style={styles.cardBottomText2}>还款日:1日</Text>
      <Text style={styles.cardBottomText3}>有效期:09/23</Text>
    </View>
 </ImageBackground>)
  }
  renderMenuList(){
    return <View style={styles.menuList}>
    {this.state.menuList.map((item,index)=>{
     return  <TouchableOpacity style={styles.menu} onPress={()=>{
      this.onSelectedMenu(index)
     }}>
               <Text style={this.state.menuIndex==index?styles.menuListActive:styles.menuTitle}>{item.name}</Text>
               {this.state.menuIndex==index?(<View style={styles.menuLine}></View>):(<></>)}
               
       </TouchableOpacity>
    })}

  </View>
  }
  renderRepayList(){
    return(
      <View style={styles.cell}>
        <View style={styles.cellHeader}>
          <Text style={styles.cellHeaderTitle}>04-10:10:12</Text>
          <Text style={styles.cellHeaderStatus}>已完成</Text>
          <Image style={styles.cellHeaderIcon} source={require("../../assets/arrow_right.png")}/>
        </View>
        <View style={styles.cellLine}></View>
        <View style={styles.cellBottom}>
          <View style={styles.cellBottomItem}>
            <Text style={styles.cellBottomItemText1}>实际应还总额</Text>
            <Text style={styles.cellBottomItemText2}>¥100.0</Text>
          </View>
          <View style={styles.cellBottomItem}>
            <Text style={styles.cellBottomItemText1}>应还</Text>
            <Text style={styles.cellBottomItemText2}>4笔</Text>
          </View>
          <View style={styles.cellBottomItem}>
            <Text style={styles.cellBottomItemText1}>应还</Text>
            <Text style={styles.cellBottomItemText2}>4笔</Text>
          </View>
        </View>
      </View>
    )
  }

  renderFooter(){
    return (<View style={styles.footer}>
      <TouchableOpacity style={styles.footerBtn} onPress={this.onPushToWithdraw.bind(this)}>
        <Text style={styles.footerBtnTitle}>取备用金</Text>
      </TouchableOpacity>
      <View style={styles.footerLine}></View>
      <TouchableOpacity style={styles.footerBtn} onPress={this.onPushToRepay.bind(this)}>
        <Text style={styles.footerBtnTitleActive}>智能还款</Text>
      </TouchableOpacity>
    </View>)
  }
  render() {
    return (
        <SafeAreaView style={styles.page}>
          <View style={styles.header}>
          {this.renderCard()}
          {this.renderMenuList()}
        </View>
        {this.renderRepayList()}
        {this.renderFooter()}
        </SafeAreaView>
    
    );
  }
  onPushToWithdraw(){
    Actions.push("withdraw")
  }
  onPushToRepay(){
   Actions.push("repay")
  }
  onSelectedMenu(index){
    this.setState({
      menuIndex:index
    })
  }
}

const styles = StyleSheet.create({
  page:{
  alignItems:'center',
  flex:1,
  backgroundColor:'#F7f7f7'
  },
  menuList:{
    width:sw(375),
    height:45,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    justifyContent:'space-around'
  },
  menu:{
    alignItems:'center',
    justifyContent:'center',
    height:45
  }

  ,menuTitle:{
    fontSize:15,
    color:'#333'
  },
  menuListActive:{
    fontSize:15,
    color:'#FFCB00'
  },
  menuLine:{
    position:'absolute',
    bottom:0,
    right:0,
    left:0,
    height:1,
    backgroundColor:'#FFCB00'
  },
  header:{
   width:sw(375),
   height:sw(228),
   alignItems:'center',
   backgroundColor:'#fff'
  },
  card:{
    marginTop:sw(15),
    width:sw(345),
    height:sw(182),
    borderRadius:10
  },
  bankName:{
   marginTop:sw(20),
   marginLeft:sw(20),
   fontSize:sw(12),
   color:'#fff',
   fontWeight:'bold'
  },
  cardNum:{
   marginTop:sw(8),
   marginLeft:sw(20),
   fontSize:sw(25),
   color:'#FFFFFF'
  },
  realName:{
   marginTop:sw(5), 
   marginLeft:sw(20),
   fontSize:sw(12),
   color:'#fff'
  },
  cardBottom:{
   marginTop:sw(28),
   marginLeft:sw(20),
   marginRight:sw(20),
   flexDirection:'row',
   alignItems:'center'
  },
  cardBottomText1:{
    fontSize:sw(12),
    color:"#fff"
  },
  cardBottomText2:{
    fontSize:sw(12),
    color:"#fff"
  },
  cardBottomText3:{
    fontSize:sw(12),
    color:"#fff",
    flex:1,
    textAlign:'right'
  },
  cell:{
   marginTop:sw(20),
   width:sw(345),
   height:sw(100),
   borderRadius:5,
   backgroundColor:'#fff'
  },
  cellHeader:{
   height:sw(40),
   flexDirection:'row',
   alignItems:'center',
   width:sw(345)
  },
  cellHeaderTitle:{
   marginLeft:sw(15),
   color:'#333',
   fontWeight:'bold',
   fontSize:sw(12),
   flex:1
  },
  cellHeaderStatus:{
   color:'#33902F',
   fontSize:sw(14),
   fontWeight:'bold'
  },
  cellHeaderIcon:{
    marginRight:sw(15),
    width:sw(6),
    height:sw(10),
    marginLeft:sw(2)
  },
  cellLine:{
    backgroundColor:'#E8E8E8',
    width:sw(345),
    height:1
  },
  cellBottom:{
    height:sw(60),
    width:sw(345),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  cellBottomItem:{
   alignItems:'center',
   marginRight:sw(20),
   marginLeft:sw(20)
  },
  cellBottomItemText1:{
    color:'#999999',
    fontSize:sw(12)
  },
  cellBottomItemText2:{
    marginTop:sw(2),
    color:'#333333',
    fontSize:sw(14),
    fontWeight:'bold'
  },
  footer:{
   width:sw(375),
   height:sw(50),
   shadowColor:'rgba(0,0,0,0.16)',
   shadowRadius:8,
   flexDirection:'row',
   alignItems:'center',
   backgroundColor:'#fff',
   position:'absolute',
   bottom:0,
   left:0,
   right:0
  },
  footerBtn:{
   flex:1,
   alignItems:'center',
   justifyContent:'center'
  },
  footerBtnTitle:{
    fontSize:sw(16),
    color:'#333333'
  },
  footerLine:{
   width:1,
   height:sw(27),
   backgroundColor:'#D8D8D8'
  },
  footerBtnTitleActive:{
    fontSize:sw(16),
    color:'#FFCB00'
  }
})
