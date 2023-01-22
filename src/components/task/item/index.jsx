import { Text, TouchableOpacity } from "react-native";

import React from "react";
import { styles } from "./styles";

const TaskItem = ({ item, onHandlerModal }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandlerModal(item)}
    >
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
