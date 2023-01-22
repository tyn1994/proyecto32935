import { AddItem, CustomModal, TaskList } from "./components";
import { Button, Modal, Text, View } from "react-native";

import { colors } from "./constants/colors";
import { styles } from "./styles";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text);
  };

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: "" + Math.random(),
        value: task,
      },
    ]);

    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(item);
  };

  const onHandlerCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  };

  const onHandlerDelete = () => {
    setTasks((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== selectedTask.id)
    );
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Lista de compras</Text>
      <AddItem
        buttonColor={colors.colorC}
        buttonText="➕"
        onHandlerChange={onHandlerChange}
        onHandlerSubmit={onHandlerSubmit}
        placeholder="Ingrese el nombre del producto:"
        task={task}
      />
      <TaskList onHandlerModal={onHandlerModal} tasks={tasks} />
      <CustomModal
        isModalVisible={isModalVisible}
        onHandlerCancel={onHandlerCancel}
        onHandlerAccept={onHandlerDelete}
        selectedTask={selectedTask}
        textTitle="Si ya lo encontró, puede eliminarlo"
        textMessage="¿Desea eliminar el siguiente producto?:"
        buttonAcceptMSG="Eliminar"
        buttonCancelMSG="Volver"
      />
    </View>
  );
};

export default App;
