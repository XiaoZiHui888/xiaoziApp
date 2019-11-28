import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class CustomTabBar extends React.Component {
  render() {
    const {state} = this.props.navigation;
    const activeTabIndex = state.index;

    return (
      <View>
        {state.routes.map(element => (
          <TouchableOpacity
            key={element.key}
            onPress={() => Actions[element.key]()}>
            <Text style={style.View}>
              {element.key.toUpperCase() + activeTabIndex}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

let style = StyleSheet.create({
  View: {
    color: 'red',
  },
});
