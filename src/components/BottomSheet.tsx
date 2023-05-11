import {
  Text,
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode, forwardRef, useImperativeHandle, useRef} from 'react';
import ActionSheet, {
  ActionSheetRef,
  SheetManager,
} from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface Iprops {
  ref: any;
}
interface BottomSheetProps {
  children: ReactNode;
  snapPoints?: 75;
  id: string;
  style?: StyleProp<ViewStyle>;
}

export const BottomSheet = forwardRef<any, BottomSheetProps>((Props, ref) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const {snapPoints = 75, children, id, style} = Props || {};

  useImperativeHandle(ref, () => ({
    show() {
      SheetManager.show(id);
    },
    close() {
      SheetManager.hide(id);
    },
  }));
  const Arr = [
    {
      heading: 'Add from gellary.',
      IconName: 'image-size-select-actual',
      color: '#242B2E',
    },
    {heading: 'Add from facbook.', IconName: 'facebook', color: '#3944F7'},
    {heading: 'Add from instagram.', IconName: 'instagram', color: '#6A1B4D'},
    {
      heading: 'Add from  googlePhotos.',
      IconName: 'google-drive',
      color: '#2827CC',
    },
  ];
  return (
    <ActionSheet
      ref={actionSheetRef}
      id={id}
      containerStyle={styles.actionSheet}>
      {Arr.map(item => (
        <TouchableOpacity style={styles.bottomSheetView}>
          <Icon name={item.IconName} size={15} color={item.color} />
          <Text style={styles.text}>{item.heading}</Text>
        </TouchableOpacity>
      ))}
    </ActionSheet>
  );
});

const styles = StyleSheet.create({
  actionSheet: {
    paddingHorizontal: 16,
    paddingTop: 15,
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
