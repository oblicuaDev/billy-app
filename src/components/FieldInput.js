import { Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";

const FieldInput = ({ label, secureTextEntry = false, ...props }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor="#98A2B7"
        style={styles.inputField}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </>
  );
};
const styles = StyleSheet.create({
  inputField: {
    backgroundColor: "#f2efff",
    color: "#404660",
    fontWeight: 500,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 25,
    marginBottom: 15,
    fontSize: 14,
    letterSpacing: 0.025,
    lineHeight: 22,
  },
  label: {
    color: "#000",
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
});
export default FieldInput;
