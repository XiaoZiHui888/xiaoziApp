import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Toast,Container} from 'native-base';
import { sw } from '../../utils/screenAdapter';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

const inputNameCell = (self)=>{
  return (
    <View style={styles.cell}>
      <Text style={styles.cellTitle}>持卡人</Text>
      <TextInput style={styles.cellInput} placeholder='请输入持卡人真实姓名' onChangeText={self.onInputName.bind(self)}></TextInput>
    </View>
  )
}
const inputCardNumCell = (self)=>{
  return (
    <View style={styles.cell}>
      <Text style={styles.cellTitle}>信用卡卡号</Text>
      <TextInput style={styles.cellInput} placeholder='请输入您的信用卡卡号' onChangeText={self.onInputCardNum.bind(self)} textContentType="creditCardNumber"></TextInput>
    </View>
  )
}

export default class Home extends Component {
  state = {
    name:'',
    cardNum:'',
    showToast: false
  }
  render() {
    return (
      <Container style={styles.page}>
        <View style={styles.list}>
          {inputNameCell(this)}
          {inputCardNumCell(this)}
          <View style={styles.tip}>
            <Text style={styles.tipText}>请绑定持卡人本人银行卡，信息加密处理，仅限于银行验证</Text>
          </View>
          <TouchableOpacity style={styles.nextBtn} onPress={this.onPushToCreditCardAdd.bind(this)}>
            <Text style={styles.nextBtnTitle}>下一步</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
  onInputName(text){
    this.state.name = text
  }
  onInputCardNum(text){
   this.state.cardNum = text
  }
  onPushToCreditCardAdd(){
    if(!this.state.name){
      Toast.show({
        text: '请输入持卡人姓名',
        position:'top',
        type:'danger'
      })
      return
    }
    if(!this.state.cardNum){
      Toast.show({
        text: '请输入信用卡号',
        position:'top',
        type:'danger'
      })
      return
    }
    Actions.push('creditCardAdd',{realName:this.state.name,cardNum:this.state.cardNum})
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
      height:sw(209),
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
     borderRadius:sw(25)
   },
   nextBtnTitle:{
    
    color:'white',
    fontSize:sw(14)
   }

})
