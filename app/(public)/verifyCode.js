import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constant/Colors"; // si ya tienes tus colores definidos
import WButon from "../../src/components/WButon"; // tu componente de botón reutilizable
import { router } from "expo-router";

const VerifyCode = () => {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(300); // 5 minutos (300 segundos)
  const inputs = useRef([]);

  // Contador regresivo
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const finalCode = code.join("");
    console.log("Código ingresado:", finalCode);
    // Aquí puedes hacer el fetch/dispatch al backend
    router.push("/change");
  };

  const formatTime = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <LinearGradient
      colors={["#bc1efa", "#951ceb", "#4b29f2", "#1a2edb", "#1e6ffa"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.gradient}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/oblicuav4.png")}
          style={{ width: 180, height: 80, resizeMode: "contain" }}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Ingresa tu código</Text>

        {/* Cajas del código */}
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChangeText={(text) => handleChange(text.slice(-1), index)}
              keyboardType="numeric"
              maxLength={1}
              style={styles.codeInput}
            />
          ))}
        </View>

        {/* Botón */}
        <WButon label="Verificar" primary onPress={handleVerify} />

        {/* Texto auxiliar */}
        <Text style={styles.infoText}>
          <Text style={styles.linkText}>¿No has recibido tu código?</Text>{" "}
          <Text style={styles.timerText}>({formatTime()})</Text>
        </Text>

        <Text style={styles.description}>
          Revisa tus mensajes e ingresa tu código para reestablecer tu
          contraseña. No olvides revisar tu carpeta de spam si no has recibido
          tu código.
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 22,
    color: "#0B26A9",
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  codeInput: {
    backgroundColor: "#F2EEFF",
    width: 55,
    height: 55,
    borderRadius: 30,
    textAlign: "center",
    fontSize: 22,
    fontFamily: "Montserrat_700Bold",
    color: "#0B26A9",
  },
  infoText: {
    fontFamily: "Montserrat_500Medium",
    color: "#000",
    marginTop: 20,
    textAlign: "center",
  },
  linkText: {
    color: "#0B26A9",
    fontFamily: "Montserrat_700Bold",
  },
  timerText: {
    color: "#A77BFA",
  },
  description: {
    textAlign: "center",
    color: "#000",
    marginTop: 20,
    lineHeight: 22,
  },
});

export default VerifyCode;
