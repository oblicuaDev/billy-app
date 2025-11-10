import React from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import Colors from "../../constant/Colors";

const SocialButton = ({ onPress, source, label, disabled, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        styles.buttonStyle,
      ]}
      disabled={disabled}
    >
      <Image
        source={source}
        resizeMode="contain"
        style={{ width: 30, height: 30 }}
      />
      <Text style={styles.labelStyle}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderColor: Colors.colorAqua,
    borderRadius: 8,
    borderWidth: 2,
    elevation: 3,
    flexDirection: "row",
    marginVertical: 13,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  labelStyle: {
    color: Colors.colorAqua,
    fontFamily: "Montserrat_700Bold",
    textAlign: "center",
    flex: 1,
  },
});

export default SocialButton;
