import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground
} from 'react-native';
import { sw } from '../../utils/screenAdapter';
import bankPicker from '../../utils/bankPicker';

export default class Home extends Component {
  state = {
    deviceId:'', // 设备id
    regionCode:'', // 消费地区
    amount:'', // 刷卡金额
    card_id:'',// 消费卡编码
    bankName:''
  }

  renderHeader(){
   return (
     <View style={styles.header}>
       <ImageBackground style={styles.card} source={require("../../assets/card_bg2.png")}>
         <Image style={styles.cardIcon} source={require("../../assets/bank_nongye.png")}/>
         <View style={styles.cardMid}>
           <Text style={styles.cardMidText1}>中国农业银行</Text>
           <Text style={styles.cardMidText2}>信用卡</Text>
           <Text style={styles.cardMidText3}>还款日:12月25日</Text>
         </View>
       </ImageBackground>
       <Text style={styles.headerTitle1}>首款金额</Text>
       <View style={styles.inputWrap}>
         <Text style={styles.inputTitle}>¥</Text>
         <TextInput style={styles.inputContent} placeholder="请输入取款金额"></TextInput>
         <View style={styles.cellLine}></View>
       </View>
       <Text style={styles.headerTitle1}>剩余额度</Text>
       <View style={styles.inputWrap}>
         <Text style={styles.inputTitle}>¥</Text>
         <TextInput style={styles.inputContent} placeholder="请填写剩余额度,不低于总额度5%"></TextInput>
         <View style={styles.cellLine}></View>
       </View>
     </View>
   )
  }

  renderCell(name,value,event){
    return (<TouchableOpacity style={styles.cell} onPress={event}>
     <Text style={styles.cellText1}>{name}</Text>
    <Text style={styles.cellText2}>{value?value:'请选择'}</Text>
      <Image style={styles.cellIcom} source={require("../../assets/arrow_right.png")}></Image>
      <View style={styles.cellLine}></View>
    </TouchableOpacity>)
  }

  render() {
    return (
      <View style={styles.page}>
        <View>
          {this.renderHeader()}
        </View>
        <View style={styles.list}>
          {this.renderCell('刷卡通道','通道F %5+1元')}
          {this.renderCell('消费城市','上海',this.onSelectCity.bind(this))}
        </View>
        <TouchableOpacity style={styles.btnSubmit} onPress={this.onSubmit.bind(this)}>
          <Text style={styles.btnSubmitTitle}>确认</Text>
        </TouchableOpacity>
        <Image style={styles.footerImage} source={require("../../assets/text2.png")}></Image>
      </View>
    );
  }
  onSelectBank(){
    bankPicker().then(res=>{
      this.setState({
        bankName:res
      })
    })
  }
  onSelectCity(){

  }
  onSubmit(){
    
  }
}
const styles = StyleSheet.create({
  page:{
   alignItems:'center',
   backgroundColor:'#f7f7f7',
   flex:1
  },
  header:{
    width:sw(375),
    backgroundColor:'#fff',
    paddingLeft:sw(15)
   
   
  },
  card:{
    marginTop:sw(20),
    width:sw(345),
    height:sw(90),
    flexDirection:'row'
  },
  cardIcon:{
    width:sw(50),
    height:sw(50),
    marginLeft:sw(20),
    marginTop:sw(15)
  },
  cardMid:{
  marginLeft:sw(20),
  flex:1
  },
  cardMidText1:{
   color:'#fff',
   fontSize:sw(16),
   marginTop:sw(12)
  },
  cardMidText2:{
    marginTop:sw(5),
   fontSize:sw(11),
   color:'#fff'
  },
  cardMidText3:{
    marginTop:sw(11),
   color:'#fff',
   fontSize:sw(11),

  },
  cardRight:{
   marginRight:sw(15)
  },
  cardRightText1:{
    marginTop:sw(12),
    color:'#fff'
  },
  cardRightText2:{
    marginTop:sw(12),
    color:'#fff'
  },
  headerTitle1:{
   marginTop:sw(15),
   marginRight:sw(15)
  },
  inputWrap:{
    height:sw(65),
    flexDirection:'row',
    alignItems:'center'
  },
  inputTitle:{
   color:'#333333',
   fontSize:sw(16)
  },
  inputContent:{
    fontSize:sw(18),
    marginLeft:sw(5)
  },
  list:{
   backgroundColor:'#fff',
   marginTop:sw(20)
  },
  cell:{
    width:sw(375),
    height:sw(50),
    flexDirection:'row',
    alignItems:'center'

  },
  cellIcom:{
     marginRight:sw(15),
     width:sw(6),
     height:sw(10),
     marginLeft:sw(2)
  },
  cellText1:{
    fontSize:sw(14),
    color:'#333333',
    marginLeft:sw(15),
    flex:1
  },
  cellText2:{
   color:'#666666',
   fontSize:sw(12)
  },
  cellLine:{
   position:'absolute',
   bottom:0,
   right:0,
   left:sw(15),
   height:1,
   backgroundColor:'#F1F1F1'
  },
  btnSubmit:{
    marginTop:sw(30),
    width:sw(343),
    height:sw(50),
    alignItems:'center',
    justifyContent:'center',
    borderRadius:sw(25),
    backgroundColor:'#FFCB00'
  },
  btnSubmitTitle:{
   fontSize:sw(14),
   color:'#FFFFFF'
  },
  footerImage:{
   marginTop:sw(30), 
   width:sw(233.5),
   height:sw(42.5)
  }
})
