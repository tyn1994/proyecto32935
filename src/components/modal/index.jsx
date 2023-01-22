import { Button, Modal, Text, View } from "react-native";

import React from "react";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

const CustomModal = ({
  isModalVisible,
  selectedTask,
  onHandlerCancel,
  onHandlerAccept,
  textTitle,
  textMessage,
  buttonCancelMSG,
  buttonAcceptMSG,
}) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{textTitle}</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>{textMessage}</Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title={buttonCancelMSG} color={colors.colorA} onPress={onHandlerCancel} />
          <Button title={buttonAcceptMSG} color={colors.colorD} onPress={onHandlerAccept} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
