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

interface Iprops {
  ref: any;
}
interface BottomSheetProps {
  snapPoints?: 75;
  id: string;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const BottomSheet = forwardRef<any, BottomSheetProps>((Props, ref) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const {snapPoints = 75, id, children} = Props || {};

  useImperativeHandle(ref, () => ({
    show() {
      SheetManager.show(id);
    },
    close() {
      SheetManager.hide(id);
    },
  }));

  return (
    <ActionSheet
      ref={actionSheetRef}
      id={id}
      containerStyle={styles.actionSheet}>
      <View>{children}</View>
    </ActionSheet>
  );
});

const styles = StyleSheet.create({
  actionSheet: {
    paddingHorizontal: 16,
    paddingTop: 15,
  },
});
