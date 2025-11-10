import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";

const SuggestedServices = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 15,
        overflow: "hidden",
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: "#FFF",
        elevation: 5,
      }}
    >
      <Image
        source={{
          uri: "https://images.pexels.com/photos/3196887/pexels-photo-3196887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={{ width: 121, height: 164 }}
      />
      <View style={{ paddingVertical: 24, paddingHorizontal: 20 }}>
        <Text
          style={{
            color: "#1C1B1F",
            fontFamily: "Montserrat_500Medium",
            fontSize: 14,
            marginBottom: 8,
          }}
        >
          Servicio de vacunación
        </Text>
        <Text
          style={{
            color: "#B0B0B0",
            fontFamily: "Montserrat_400Regular",
            fontSize: 14,
            marginBottom: 8,
          }}
        >
          Incluye vacuna + 20% de descuento
        </Text>
        <Pressable
          style={{
            backgroundColor: Colors.colorAqua,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 36,
            paddingVertical: 5,
            borderRadius: 25,
            marginBottom: 8,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Montserrat_400Regular",
              fontSize: 14,
            }}
          >
            Mejorar mi plan
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderColor: Colors.colorNaranja,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 36,
            borderRadius: 25,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              color: Colors.colorNaranja,
              fontFamily: "Montserrat_400Regular",
              fontSize: 14,
            }}
          >
            Adquirir uno extra
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SuggestedServices;
