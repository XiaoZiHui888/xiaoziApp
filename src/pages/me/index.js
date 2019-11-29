import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { sw } from '../../utils/screenAdapter';


const header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image style={styles.userInfoImage}></Image>
        <View style={styles.userInfoRight}>
          <View style={styles.userInfoTop}>
            <Text style={styles.userInfoName}>用户姓名</Text>
            <Image style={styles.userInfoRank}></Image>
          </View>
          <Text style={styles.userInfoDate}>2019-12-12</Text>
        </View>
      </View>
    </View>
  )
}
const income = () => {
  return (
    <View style={styles.cell}>
      <Text style={styles.cellTitle1}>累计总收入</Text>
      <Text style={styles.cellTitle2}>¥543.45</Text>
    </View>
  )
}

const cell = (name) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.cellTitle3}>{name}</Text>
      <Image style={styles.cellImage} source={require("../../assets/arrow_right.png")} />
    </View>
  )
}

export default class Me extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.page}>
        {header()}
        {income()}
        {cell('我的钱包')}
        {cell('我的销售单')}
        {cell('我的订单')}
        {cell('使用帮助')}
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  page: {
    alignItems: "center"
  },
  header: {
    width: sw(375),
    height: sw(159),
    backgroundColor: '#D80B2A'
  },
  userInfo: {
    marginTop: sw(84),
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
    color: 'white',
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
    marginTop: 8,
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
  }

})
