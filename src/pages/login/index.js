import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image, Button, TouchableOpacity,TextInput } from 'react-native';
import { sw } from '../../utils/screenAdapter'
import { Actions } from 'react-native-router-flux';
import { catchClause } from '@babel/types';
import { white } from 'ansi-colors';
import regex from '../../utils/regex';

// 异常提示
const showError = (error)=>{
    return (
        <View style={styles.error}>
        <Image style={styles.errorIcon} source={require('../../assets/error_icon.png')}></Image>
    <Text style={styles.errorMsg}>{error}</Text>
     </View>
    )
}


export default class Login extends Component {
    state = {
        phone:'',
        code:'',
        duration:60,
        timer:null,
        error:''
    }
    render() {
        return (
            <View style={styles.page}>
                {/* 手机号码 */}
                <View style={styles.cell}>
                    <Image style={styles.cellIcon} source={require("../../assets/login_phone.png")}></Image>
                    <TextInput ref="inputPhone" style={styles.cellTitle} placeholder="请输入手机号码" maxLength={11} onChangeText={this.onInputPhone.bind(this)} textContentType="telephoneNumber" keyboardType="phone-pad" clearButtonMode={true} onFocus={this.onResetError.bind(this)}/>
                </View>
                {/* 验证码 */}
                <View style={styles.cell}>
                    <Image style={styles.cellIcon} source={require("../../assets/login_code.png")}></Image>
                    <TextInput ref="inputCode" style={styles.cellTitle} placeholder="请输入验证码"  maxLength={6} onChangeText={this.onInputCode.bind(this)} keyboardType="phone-pad" onFocus={this.onResetError.bind(this)}/>
                    <TouchableOpacity style={!this.state.timer?styles.cellBtn:styles.cellBtnDisabled} onPress={this.onCountDown.bind(this)} disabled={!!this.state.timer}>
        <Text style={styles.cellBtnTitle}>{!this.state.timer?'获取验证码':this.state.duration + 's后重试'}</Text>
                    </TouchableOpacity>
                   
                </View>
                {/* 异常提示 */}
                {
                  this.state.error?showError(this.state.error):<></>
                }
                <TouchableOpacity style={styles.btnSubmit} onPress={this.onPushToIndex.bind(this)}>
                      <Text style={styles.btnSubmitText}>快速登录</Text>
                </TouchableOpacity>
                 
                
            </View>
        );
    }
    onPushToIndex() {
        this.refs.inputPhone.blur()
        this.refs.inputCode.blur()
        if(!regex.testPhone(this.state.phone)){
            this.setState({
                error:'请输入正确的手机号码'
            })
            return
        }
        if(!this.state.code){
            this.setState({
                error:'请输入验证码'
            })
            return
        }
        Actions.replace("tabbar")
    }
    // 输入手机
    onInputPhone(text){
       this.state.phone = text
    }
    // 输入code
    onInputCode(text){
       this.state.code = text
    }
    // 开始倒计时
    onCountDown(text){
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
    onResetError(){
        this.setState({
            error:''
        })
    }
    // 跳转到用户协议
    onPushToAgressment() {
        Actions.push('agreement')
    }
}
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f7f7f7',
        flex: 1
    },
    cell:{
        marginTop:sw(20),
        width:sw(343),
        height:sw(50),
        borderRadius:4,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        display:'flex',
        overflow:"hidden"
    },
    cellIcon:{
       marginLeft:sw(20),
       width:sw(20),
       height:sw(20)
    },
    cellTitle:{
        marginLeft:sw(20),
        flex:1,
        fontSize:sw(14)
    },
    cellBtn:{
        width:sw(100),
        height:sw(50),
        color:'white',
        backgroundColor:'#D80B2A',
        alignItems:'center',
        justifyContent:"center"
    },
    cellBtnDisabled:{
        width:sw(100),
        height:sw(50),
        color:'white',
        backgroundColor:'#aaa',
        alignItems:'center',
        justifyContent:"center"
    },
    cellBtnTitle:{
       fontSize:sw(14),
       color:'white'
    },
    error:{
     marginTop:sw(15),   
     flexDirection:'row',
     alignItems:'center',
     width:sw(375)
    },
    errorIcon:{
        width:sw(15),
        height:sw(15),
        marginLeft:sw(16)
    },
    errorMsg:{
       marginLeft:sw(5),
       fontSize:sw(14),
       color:'#DB2743'
    },
    btnSubmit:{
        marginTop:sw(30),
        width:sw(343),
        height:50,
        borderRadius:sw(25),
        backgroundColor:'#D80B2A',
        color:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    btnSubmitText:{
        color:'white',
        fontSize:sw(18)
    }

});
