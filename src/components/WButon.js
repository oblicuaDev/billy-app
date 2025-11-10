import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";

const WButon = ({
  label,
  primary,
  secondary,
  tertiary,
  tertiary2,
  onPress,
  isLoading,
  ...props
}) => {
  return (
    <Pressable
      onPress={onPress}
      {...props}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
        styles.button,
        primary && styles.primary,
        secondary && styles.secondary,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator size={14} color="#FFF" />
      ) : (
        <Text
          style={[
            { fontFamily: "Montserrat_700Bold" },
            primary && { color: "#FFF" },
            secondary && { color: "#951ceb" },
            tertiary && styles.tertiaryText,
            tertiary2 && [styles.tertiaryText, { color: "#F90" }],
          ]}
        >
          {label}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 13,
  },
  primary: {
    padding: 15,
    backgroundColor: Colors.colorAqua,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  secondary: {
    borderColor: "#951ceb",
    padding: 15,
    borderWidth: 1,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  tertiaryText: {
    color: Colors.colorAqua,
    fontSize: 14,
    fontFamily: "Montserrat_500Medium",
  },
});

export default WButon;
