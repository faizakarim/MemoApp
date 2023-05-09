import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BottomSheet} from '../components/BottomSheet';
import {Modalize} from 'react-native-modalize';

const HomeScreen = () => {
  const actionSheetRef = useRef();
  return (
    <View style={style.container}>
      <View>
        <Header />
      </View>
      <View style={style.memoryView}>
        <Text>Add your memory </Text>
        <TouchableOpacity onPress={() => actionSheetRef.current?.show()}>
          <Icon name="add-a-photo" size={25} />
        </TouchableOpacity>
      </View>
      <BottomSheet ref={actionSheetRef} id={'1'} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#CAD5E2',
    flex: 1,
    position: 'relative',
  },
  memoryView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#758283',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: '95%',
  },
});
export default HomeScreen;
