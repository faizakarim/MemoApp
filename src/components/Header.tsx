import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFF'}}>faiza</Text>
      <Icon name="account-circle" size={30} color={'#ffff'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: '#758283',
    borderRadius: 1,
    borderWidth: 1,
    backgroundColor: '#1C8D73',
  },
});
