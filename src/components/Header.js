import React from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { StyleSheet, View, Pressable, Image } from "react-native";
import Colors from "../../constant/Colors";
import { selectUsers } from "../store/selectors";
import { useSelector } from "react-redux";

const Header = (props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.colorAqua,
        paddingVertical: 13,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flexDirection: "row",
      }}
    >
      <Pressable style={styles.buttonHeader}>
        <DrawerToggleButton tintColor={Colors.colorAqua} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonHeader: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 40,
  },
});

export default Header;
