import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Text, Button, Icon} from 'native-base';
import {purple, lightGray} from 'utils/constants/colors';

interface SelectModalInterface {
  items: any;
  visible: boolean;
  confirm: any;
  dissmiss(): void;
}

const SelectModal = ({
  items,
  visible,
  confirm,
  dissmiss,
}: SelectModalInterface) => {
  return (
    <Modal
      animationOut="fadeOutDown"
      animationIn="pulse"
      animationInTiming={750}
      isVisible={visible}
      swipeDirection={['right', 'left', 'up', 'down']}
      onSwipeComplete={dissmiss}
      onBackButtonPress={dissmiss}
      onBackdropPress={dissmiss}>
      <View style={styles.Container}>
        {items.map((item: {Name: string; Icon?: string}, i: any) => (
          <Button
            full
            rounded
            style={styles.Button}
            key={i}
            onPress={() => confirm(item.Name)}>
            <Text style={styles.Text}>{item.Name}</Text>
            {item.Icon ? (
              <Icon name={item.Icon} type="FontAwesome5" style={styles.Icon} />
            ) : null}
          </Button>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: lightGray,
    paddingVertical: 14,
    borderRadius: 8,
  },
  Button: {
    marginTop: 5,
    marginHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: purple,
  },
  Text: {
    color: lightGray,
    fontSize: 15,
    textAlign: 'center',
  },
  Icon: {
    fontSize: 16,
  },
});

export default SelectModal;
