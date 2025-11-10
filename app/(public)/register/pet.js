import React, { useRef, useState } from "react";

import { router } from "expo-router";
import {
  View,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import Colors from "../../../constant/Colors";
const totalSteps = 3;

const pet = () => {
  const opacity = useSharedValue(1); // Estado compartido para la opacidad
  const fadeIn = () => {
    opacity.value = withTiming(1, { duration: 300, easing: Easing.linear });
  };
  const fadeOut = () => {
    opacity.value = withTiming(0, { duration: 300, easing: Easing.linear });
  };
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = useState({
    type: "",
  });

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.fixedContainer}>
        <Pressable
          style={styles.buttonHeader}
          onPress={() => {
            fadeOut();
            setTimeout(() => {
              goToPreviousStep();
              fadeIn();
            }, 300);
          }}
        ></Pressable>
        <Pressable
          style={styles.buttonHeader}
          onPress={() => console.log("Click!")}
        ></Pressable>
      </View>
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        style={styles.form}
      ></ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorTurquesa,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  fixedContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 20,
    width: "100%",
    backgroundColor: Colors.colorTurquesa,
  },
  form: {
    paddingHorizontal: 50,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 33,
  },
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
export default pet;
