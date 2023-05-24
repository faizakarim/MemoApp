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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BottomSheet} from '../components/BottomSheet';
import {CameraOptions, launchImageLibrary} from 'react-native-image-picker';
const HomeScreen = () => {
  const actionSheetRef = useRef();
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const Arr = [
    {
      heading: 'Add from Gallery.',
      IconName: 'image-size-select-actual',
      color: '#242B2E',
    },
    {heading: 'Add from Facbook.', IconName: 'facebook', color: '#3944F7'},
    {heading: 'Add from Instagram.', IconName: 'instagram', color: '#6A1B4D'},
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
    setImagePaths(prevPaths => [...prevPaths, imagePath]);
  };
  const handlePress = index => {
    switch (index) {
      case 0:
        chooseFile();
        break;
      case 1:
        console.log('Pressed: Add from Facebook');
        // Perform action for "Add from Facebook"
        break;
      case 2:
        console.log('Pressed: Add from Instagram');
        // Perform action for "Add from Instagram"
        break;
      case 3:
        console.log('Pressed: Add from Google Photos');
        // Perform action for "Add from Google Photos"
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.imageRow}>
        {imagePaths.map((path, index) => (
          <Image
            key={index}
            source={{uri: path}}
            alt={`Image ${index}`}
            style={styles.imageItem}
          />
        ))}
      </View>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
          bottom: 10,
          width: '90%',
        }}>
        <TouchableOpacity
          onPress={() => {
            actionSheetRef?.current?.show();
          }}
          style={styles.memoryView}>
          <Text style={{color: '#ffff'}}>Add your memory</Text>
          {/* <Icon name="camera-plus" size={25} /> */}
        </TouchableOpacity>
      </View>
      <BottomSheet ref={actionSheetRef} id={'1'}>
        {Arr.map((item, index) => (
          <TouchableOpacity
            style={styles.bottomSheetView}
            onPress={() => handlePress(index)}>
            <Icon name={item.IconName} size={20} color={item.color} />
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
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1C8D73',
    justifyContent: 'center',
  },
  bottomSheetView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  text: {
    marginLeft: 20,
    fontSize: 13,
    width: '100%',
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageItem: {
    width: 110,
    height: 110,
    margin: 5,
  },
});
export default HomeScreen;
