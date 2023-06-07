import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  title: string;
  onPress: () => void;
}

export const AppButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={{color: '#ffff'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1C8D73',
    justifyContent: 'center',
  },
});
