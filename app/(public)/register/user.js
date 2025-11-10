import React, { useRef, useState } from "react";
import { router } from "expo-router";
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
  Image,
  ScrollView,
  Animated,
} from "react-native";
import FieldInput from "../../../src/components/FieldInput";
import WButon from "../../../src/components/WButon";
import Colors from "../../../constant/Colors";

const Header_Max_Height = 300;
const Header_Min_Height = 66;
const totalSteps = 3;

const RegisterUser = () => {
  // STEPS START
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    lastname: "",
    phone: "",
    departamento: "",
    cirty: "",
    address: "",
    password: "",
  });
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const animateHeaderHeight = scrollOffsetY.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });
  const animateButtonsPosition = scrollOffsetY.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [-Header_Min_Height - 15, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fixedContainer,
          {
            transform: [{ translateY: animateButtonsPosition }],
            backgroundColor: "#FFF",
          },
        ]}
      >
        <Pressable
          style={styles.buttonHeader}
          onPress={() => goToPreviousStep()}
        ></Pressable>
        <Pressable
          style={styles.buttonHeader}
          onPress={() => console.log("Click!")}
        ></Pressable>
      </Animated.View>
      <ScrollView
        bounces={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        <Animated.View
          style={[
            {
              justifyContent: "center",
              alignItems: "center",
              left: 0,
              right: 0,
              paddingTop: 66,
              transform: [{ translateY: 66 }],
            },
            {
              height: animateHeaderHeight,
            },
          ]}
        ></Animated.View>
        <View style={styles.form}>
          <Text
            style={{
              color: Colors.colorTurquesa,
              fontFamily: "Montserrat_700Bold",
              fontSize: 20,
              marginBottom: 35,
            }}
          >
            Registro
          </Text>
          <FieldInput
            label="Correo electrónico"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.email}
          />
          <FieldInput
            label="Nombres"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.name}
          />
          <FieldInput
            label="Apellidos"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.lastname}
          />
          <FieldInput
            label="Celular"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.phone}
          />
          <FieldInput
            label="Departamento"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.departamento}
          />
          <FieldInput
            label="Ciudad"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.cirty}
          />
          <FieldInput
            label="Dirección"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.address}
          />
          <FieldInput
            label="Contraseña"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.password}
          />
          <FieldInput
            label="Confirmar contraseña"
            onChangeText={setFormData}
            placeholder="Campo de Texto"
            value={formData.password}
          />
        </View>
        <View style={{ backgroundColor: "#FFF", paddingHorizontal: 50 }}>
          <WButon
            label="GUARDAR MIS DATOS"
            primary
            onPress={() => router.push("register/pet")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    position: "absolute",
    zIndex: 2,
  },
  form: {
    paddingHorizontal: 50,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 66,
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

export default RegisterUser;
