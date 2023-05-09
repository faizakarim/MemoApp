import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text>faiza</Text>
      <Icon name="account-circle" size={30} />
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
  },
});
