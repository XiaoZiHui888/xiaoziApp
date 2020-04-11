import React, {Component} from 'react';
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
import { sw } from '../../utils/screenAdapter';

export default class Home extends Component {
  state = {
    menuList:[{name:"大额通道"},{name:"小额通道"}],
    menuIndex:0
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
  renderCell(){
   return (
     <TouchableOpacity style={styles.cell} activeOpacity={0.8}>
       <View style={styles.cellTop}>
         <Image style={styles.cellTopIcon} source={require("../../assets/yinlian1.png")}></Image>
         <Text style={styles.cellTopText}>银联小额落地商户-通道B</Text>
         <Text style={styles.cellTopBank}>支持银行</Text>
       </View>
       <View style={styles.cellItem}>
         <Text style={styles.cellItemText1}>还款费用</Text>
         <Text style={styles.cellItemText2}>20-50000元</Text>
       </View>
       <View style={styles.cellItem}>
         <Text style={styles.cellItemText1}>注册会员备用金/只能还款费率</Text>
         <Text style={styles.cellItemText2}>0.65%</Text>
       </View>
       <View style={styles.cellItem}>
         <Text style={styles.cellItemText1}>VIP只能还款费率低至</Text>
         <Text style={styles.cellItemText3}>0.45%</Text>
       </View>
       <View style={styles.cellItem}>
         <Text style={styles.cellItemText1}>时间</Text>
         <Text style={styles.cellItemText2}>9:00-18:00</Text>
       </View>
       <View style={styles.cellLine}></View>
       <Text style={styles.cellTip}>提示：暂不支持备用金功能还款费率低，单次消费金额在1000以内，适用于还款时间充裕的用户</Text>
     </TouchableOpacity>
   )
  }

  renderCellInvalid(){
    return (
      <View style={styles.cell}>
        <View style={styles.cellTop}>
          <Image style={styles.cellTopIcon} source={require("../../assets/yinlian2.png")}></Image>
          <Text style={styles.cellTopTextInvalid}>银联小额落地商户-通道B</Text>
          <Text style={[styles.cellTopBank,styles.cellTopBankInvalid]}>支持银行</Text>
        </View>
        <View style={styles.cellItem}>
          <Text style={styles.cellItemText1}>还款费用</Text>
          <Text style={styles.cellItemText2Invalid}>20-50000元</Text>
        </View>
        <View style={styles.cellItem}>
          <Text style={styles.cellItemText1}>注册会员备用金/只能还款费率</Text>
          <Text style={styles.cellItemText2Invalid}>0.65%</Text>
        </View>
        <View style={styles.cellItem}>
          <Text style={styles.cellItemText1}>VIP只能还款费率低至</Text>
          <Text style={styles.cellItemText2Invalid}>0.45%</Text>
        </View>
        <View style={styles.cellItem}>
          <Text style={styles.cellItemText1}>时间</Text>
          <Text style={styles.cellItemText2Invalid}>9:00-18:00</Text>
        </View>
        <View style={styles.cellLine}></View>
        <Text style={[styles.cellTip,styles.cellItemText1]}>提示：暂不支持备用金功能还款费率低，单次消费金额在1000以内，适用于还款时间充裕的用户</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.page}>
        {this.renderMenuList()}
       {this.renderCell()}
       {this.renderCellInvalid()}
      </View>
    );
  }
  onSelectedMenu(index){
    this.setState({
      menuIndex:index
    })
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
  cell:{
   marginTop:sw(10),
   width:sw(345),
   backgroundColor:'#fff',
   borderRadius:8
  },
  cellTop:{
    marginTop:sw(22),
    flexDirection:'row',
    alignItems:'center',
    marginLeft:sw(15),
    marginRight:sw(15)
  },
  cellTopIcon:{
   width:sw(25),
   height:sw(15)
  },
  cellTopText:{
    marginLeft:sw(2),
   color:'#333333',
   fontSize:sw(16),
   flex:1
  },
  cellTopTextInvalid:{
    marginLeft:sw(2),
   color:'#999',
   fontSize:sw(16),
   flex:1
  },
  cellTopBank:{
   width:sw(58),
   height:sw(28),
   textAlign:'center',
   lineHeight:sw(28),
   borderRadius:sw(6),
   color:'#FFCB00',
   borderColor:'#FFCB00',
   borderWidth:1,
   fontSize:sw(12)
  },
  cellTopBankInvalid:{
    color:'#999',
    borderColor:'#999',
  },
  cellItem:{
    marginTop:sw(5),
    flexDirection:'row',
    alignItems:'center'
  },
  cellItemText1:{
   color:'#999999',
   fontSize:sw(11),
   marginLeft: sw(15),
  },
  cellItemText2:{
    fontSize:sw(11),
    color:'#333',
    marginLeft:sw(3)
  },
  cellItemText2Invalid:{
    fontSize:sw(11),
    color:'#999999',
    marginLeft:sw(3)
  },
  cellItemText3:{
   width:sw(40),
   height:sw(18),
   borderRadius:sw(4),
   borderWidth:1,
   borderColor:'#2E9810',
   textAlign:'center',
   lineHeight:sw(18),
   color:'#fff',
   overflow:'hidden',
   backgroundColor:'#2E9810',
   marginLeft:sw(2),
   fontSize:sw(11)
  },
  cellLine:{
    marginTop:sw(5),
    width:sw(315),
    height:1,
    marginLeft:15,
    backgroundColor:'#D8D8D8'
  },
  cellTip:{
    marginTop:sw(10),
    color:'#CE1D1D',
    fontSize:sw(11),
    marginLeft:sw(15),
    marginRight:sw(15),
    marginBottom:sw(15)
  }
})
