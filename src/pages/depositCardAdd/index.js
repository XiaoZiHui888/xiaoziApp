import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  TouchableHighlight
} from 'react-native';
import showDaysPacker from '../../utils/dayPacker';
import {Toast} from 'native-base';
import { sw } from '../../utils/screenAdapter';
import { Actions } from 'react-native-router-flux';

const inputNameCell = (cardBank,event)=>{
  return (
    <View style={styles.cell}>
      <Text style={styles.cellTitle}>银行名称</Text>
      <TextInput style={styles.cellInput} placeholder='请输入银行名称' defaultValue={cardBank} onChangeText={event}></TextInput>
    </View>
  )
}
const inputCell = (title,placeholder,icon,event)=>{
  return (
    <View style={styles.cell}>
<Text style={styles.cellTitle}>{title}</Text>
      <TextInput style={styles.cellInput} placeholder={placeholder} onChangeText={event} textContentType="creditCardNumber"></TextInput>
      <Image style={styles.cellIcon} source={icon}></Image>
    </View>
  )
}
const selectCell = (title,placeholder,value,icon,event)=>{
  return (
    <TouchableOpacity style={styles.cell} onPress={event}>
      <Text style={styles.cellTitle}>{title}</Text>
      <Text style={value?styles.cellValue:styles.cellPlaceHolder}>{value?`每月${value}日`:placeholder}</Text>
      <Image style={styles.cellIcon} source={icon}></Image>
    </TouchableOpacity>
  )
}

export default class CreditCardAdd extends Component {
  state = {
    name:'',
    cardNo: this.props.cardNum,
    cardBank:"中国银行",
    phoneNo: "",
    expiredDate: "",
    CVV2: "",
    statementDate:"",
    repaymentDate:"",
    code:'',
    timer:null,
    duration:60
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.list}>
          {inputNameCell(this.state.cardBank,this.onInputName.bind(this))}
          {inputCell('有效期','请输入有效期（如：0923)',require("../../assets/question.png"))}
          {inputCell('安全码','请输入卡片背面后3位数字',require("../../assets/question.png"))}
          {selectCell('账单日','请选择',this.state.statementDate,require("../../assets/arrow_right.png"),this.onInputStatementDate.bind(this))}
          {selectCell('还款日','请选择',this.state.repaymentDate,require("../../assets/arrow_right.png"),this.onInputRepaymentDate.bind(this))}
          {inputCell('手机号码','请输入银行预留手机号码',require("../../assets/arrow_right.png"),this.onInputPhoneNo.bind(this))}
          
        <View style={styles.cell}>
          <Text style={styles.cellTitle}>验证码</Text>
          <TextInput style={styles.cellValue} placeholder="请输入验证码"></TextInput>
          <TouchableOpacity style={styles.cellBtn} onPress={this.onSendVerifyCode.bind(this)} disabled={!!this.state.timer}>
    <Text style={!this.state.timer?styles.cellBtnTitle:styles.cellBtnTitleInvalid}>{this.state.timer?`${this.state.duration}s`:'发送验证码'}</Text>
            </TouchableOpacity>
        </View>

          <TouchableOpacity style={styles.nextBtn} onPress={this.onBindCreditCardAdd.bind(this)}>
            <Text style={styles.nextBtnTitle}>下一步</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  onInputName(text){
    this.state.name = text
  }
  onInputCardNum(text){
   this.state.cardNum = text
  }
  onInputExpiredDate(text){
    this.state.expiredDate = text
  }
  onInputCVV2(text){
    this.state.CVV2 = text
  }
  onInputStatementDate(){
    showDaysPacker('请选择账单日').then(res=>{
      this.setState({
        statementDate:res
      })
    })
  }
  onInputRepaymentDate(){
    showDaysPacker('请选择还款日').then(res=>{
      this.setState({
        repaymentDate:res
      })
    })
  }
  onInputPhoneNo(text){
    this.state.phoneNo = text
  }
  onInputCode(text){
    this.state.code = text
  }
  onBindCreditCardAdd(){
    if(!this.state.cardBank){
      Toast.show({
        text: '请输入持卡人姓名',
        position:'top',
        type:'danger'
      })
      return
    }
    if(!this.state.expiredDate){
      Toast.show({
        text: '请输入有效期',
        position:'top',
        type:'danger'
      })
      return
    }
    if(!this.state.CVV2){
      Toast.show({
        text: '请输入安全码',
        position:'top',
        type:'danger'
      })
      return
    }
    if(!this.state.statementDate){
      Toast.show({
        text: '请选择账单日',
        position:'top',
        type:'danger'
      })
      return
    }
    if(!this.state.CVV2){
      Toast.show({
        text: '请输入还款日期',
        position:'top',
        type:'danger'
      })
      return
    }
    if(!this.state.phoneNo){
      Toast.show({
        text: '请输入银行预留手机号码',
        position:'top',
        type:'danger'
      })
      return
    }
    if(!this.state.code){
      Toast.show({
        text: '请输入验证码',
        position:'top',
        type:'danger'
      })
      return
    }

    Actions.replace('cardSign')

    

  }
  onSendVerifyCode(){
     this.onCountDown()
  }
  onCountDown(){
    if(!this.state.timer){
        let timer = setInterval(() => {
            let duration = --this.state.duration
            this.setState({
                duration: duration
            })
            if(this.state.duration<=0){
                clearInterval(this.timer)
                this.setState({
                    timer:null,
                    duration:60
                })
            }
            console.log(this.state)
        }, 1000);
        this.setState({
            timer:timer
        })
    }
 }

}

const styles = StyleSheet.create({
   page:{
    width:'100%',
    minHeight:'100%',
    alignItems:'center',
    backgroundColor:'#f7f7f7'
   },

   list:{
     marginTop:sw(15),
      width:sw(345),
      backgroundColor:'white',
      alignItems:'center'
   },
   cell:{
     height:sw(74.5),
     width:sw(313),
     borderWidth:1,
     borderColor:'rgba(0,0,0,0)',
     borderBottomColor:'#E8E8E8'
   },
   cellTitle:{
    marginTop:sw(20),
    fontSize:sw(12),
    color:'#999999'
   },
   cellInput:{
    marginTop:sw(12),
    fontSize:sw(15),
    color:'#333333'
   },
   tip:{
     marginTop:sw(18)
   },
   tipText:{
     fontSize:sw(12),
     color:'#999999'
   },
   nextBtn:{
    marginTop:sw(55),
     width:sw(343),
     backgroundColor:'#FFCB00',
     height:sw(50),
     alignItems:'center',
     justifyContent:'center',
     borderRadius:sw(25),
     marginBottom:sw(30)
   },
   nextBtnTitle:{
    
    color:'white',
    fontSize:sw(14)
   },
   cellPlaceHolder:{
     marginTop:sw(12),
     fontSize:sw(15),
     color:'#D8D8D8'
   },
   cellValue:{
    marginTop:sw(12),
    fontSize:sw(15),
    color:'#333333'
   },
   cellIcon:{
    width:sw(12),
    height:sw(12),
    position:'absolute',
    bottom:sw(6.5),
    right:0
   },
   cellBtn:{
     position: 'absolute',
     bottom:sw(20),
     right:0,
     width:sw(75),
     height:sw(21),
     alignItems:"center",
     justifyContent:'center'
   },
   cellBtnTitle:{
     color:'#CE1D1D'
   },
   cellBtnTitleInvalid:{
    color:'#aaa'
   },
   cellBtnTitl:{
     color:'#aaa'
   }

})
