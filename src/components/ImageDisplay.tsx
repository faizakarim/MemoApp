import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React from 'react';

interface Props {
  title: string;
  source: ImageSourcePropType;
  createdDate: Date;
}

export const ImageDisplay: React.FC<Props> = ({source, createdDate}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
      <Text>create at:{createdDate.toString()}</Text>
      <Text>Memory from facebook</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  image: {
    width: '50%',
    height: '50%',
  },
});
