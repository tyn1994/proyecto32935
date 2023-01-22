import { StyleSheet } from "react-native";
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.colorD,
    marginBottom: 10,
    borderRadius: 10,
  },
  itemList: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
});
