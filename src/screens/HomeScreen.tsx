import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BottomSheet} from '../components/BottomSheet';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';
const HomeScreen = () => {
  const actionSheetRef = useRef();
  const [image, setImage] = useState('');

  const [filePath, setFilePath] = useState({});
  const Arr = [
    {
      heading: 'Add from Gallery.',
      IconName: 'image-size-select-actual',
      color: '#242B2E',
    },
    {heading: 'Add from Facbook.', IconName: 'facebook', color: '#3944F7'},
    {heading: 'Add from Instagram.', IconName: 'insatagram', color: '#6A1B4D'},
    {
      heading: 'Add from  Google Photos.',
      IconName: 'google-drive',
      color: '#2827CC',
    },
  ];
  const chooseFile = async () => {
    let options: CameraOptions = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    let gallery = await launchImageLibrary(options);
    const imagePath = gallery?.assets?.[0]?.uri ?? '';
    setImage(imagePath);
  };

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View>
        {image && (
          <Image source={{uri: image}} style={{width: 200, height: 200}} />
        )}
      </View>
      <View style={styles.memoryView}>
        <Text>Add your memory </Text>
        <TouchableOpacity
          onPress={() => {
            actionSheetRef?.current?.show();
          }}>
          <Icon name="add-a-photo" size={25} />
        </TouchableOpacity>
      </View>
      <BottomSheet ref={actionSheetRef} id={'1'}>
        {Arr.map(item => (
          <TouchableOpacity style={styles.bottomSheetView} onPress={chooseFile}>
            <Icon name={item.IconName} size={15} color={item.color} />
            <Text style={styles.text}>{item.heading}</Text>
          </TouchableOpacity>
        ))}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
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
  bottomSheetView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  text: {
    marginLeft: 20,
    fontSize: 11,
    fontWeight: 'bold',
    width: '100%',
  },
});
export default HomeScreen;
