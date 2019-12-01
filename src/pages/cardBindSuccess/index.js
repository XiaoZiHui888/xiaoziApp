import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {sw} from '../../utils/screenAdapter';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <Image style={styles.icon} source={require('../../assets/success_icon.png')}></Image>
        <Text style={styles.title}>签约成功</Text>
        <TouchableOpacity style={styles.btn} onPress={this.jumpHome.bind(this)}>
          <Text style={styles.btnTitle}>已完成</Text>
        </TouchableOpacity>
      </View>
    );
  }
  jumpHome(){
    Actions.replace("index")
  }
}

const styles = StyleSheet.create({
  page:{
    alignItems:'center',
    flex:1,
    backgroundColor:'#f7f7f7'
  },
  icon:{
   marginTop:sw(35),
   width:sw(83),
   height:sw(83)
  },
  title:{
    marginTop:sw(10),
    color:'#666666',
    fontSize:sw(16)
  },
  btn:{
    marginTop:sw(24),
     width:sw(134),
     height:sw(38),
     borderRadius:sw(19),
     alignItems:"center",
     justifyContent:'center',
     borderColor:'#DBAE64',
     borderWidth:1
  },
  btnTitle:{
   fontSize:sw(16),
   color:'#DBAE64'
  }
})
