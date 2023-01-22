import { StyleSheet } from "react-native";
import {colors} from './constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.colorB,
  },
  textMain:{
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 60,
    marginLeft: 20,
  },
});
