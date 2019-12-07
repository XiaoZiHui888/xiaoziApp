import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image
} from 'react-native';
import { sw } from '../../utils/screenAdapter';

export default class Home extends Component {
  state = {
    menuList:[
      {name:"信用卡"},
      {name:"储蓄卡"}
    ],
    menuIndex:0
  }
  constructor(props){
    super(props)
    this.onSelectedMenu.bind(this)
  }
  // 渲染顶部菜单
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
  // 渲染列表
  renderList(){
    return <FlatList data={[1,2,3]} contentContainerStyle={styles.list} renderItem={(item)=>{
      return       <ImageBackground style={styles.card} source={require("../../assets/card_bg2.png")} key={item}>
      <Image style={styles.bankIcon} source={require("../../assets/bank_nongye.png")}/>
      <View style={styles.cardMid}>
        <Text style={styles.bankName}>农业银行卡</Text>
        <Text style={styles.cardType}>信用卡</Text>
      </View>
      <TouchableOpacity style={styles.cardBtn}>
         <Text style={styles.cardBtnTitle}>通道管理</Text>
      </TouchableOpacity>
    </ImageBackground>
    }}>

    </FlatList>
  }
  render() {
    return (
      <SafeAreaView style={styles.page}>
        {this.renderMenuList()}
        {this.renderList()}
        <TouchableOpacity style={styles.btnSubmit} onPress={this.pushToAddCard.bind(this)}>
    <Text style={styles.btnSubmitTitle}>{this.state.menuIndex==0?'添加一张信用卡':'添加一张储蓄卡'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  onSelectedMenu(index){
    this.setState({
      menuIndex:index
    })
  }
  pushToAddCard(){
   if(this.state.menuIndex==0){
      Actions.push("creditCardInput")
   }
  }
}
const styles = StyleSheet.create({
  page:{
   flex:1,
   alignItems:'center'
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
  list:{
   alignItems:'center'
  },
  card:{
   marginTop:sw(10),
   width:sw(345),
   height:sw(90),
   borderRadius:8,
   flexDirection:'row',
   alignItems:'center',
  
  },
  bankIcon:{
   marginLeft:sw(20),
   width:sw(50),
   height:sw(50)
  },
  cardMid:{
   marginLeft:sw(10),
   flex:1
  },
  bankName:{
   fontSize:sw(15),
   fontWeight:'bold',
   color:'#fff'
  },
  cardType:{
    marginTop:sw(5),
    fontSize:sw(14),
    color:'#fff'
  },
  cardBtn:{
    width:sw(68),
    height:sw(26),
    alignItems:'center',
    justifyContent:'center',
    borderRadius:sw(13),
    borderColor:'#fff',
    borderWidth:1,
    marginRight:sw(15)
  },
  cardBtnTitle:{
    fontSize:sw(12),
    color:'#fff'
  },
  btnSubmit:{
    marginTop:sw(40),
    width:sw(343),
    height:sw(50),
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#FFCB00',
    borderRadius:sw(45)
  },
  btnSubmitTitle:{
    color:'#FFCB00',
    fontSize:sw(15)
  }
})
