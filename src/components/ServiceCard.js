import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../../constant/Colors";

const ServiceCard = ({ title, text, image, quantity, onPress }) => {
  return (
    <Pressable
      onPress={() => {
        quantity > 0 ? onPress() : console.log("No Service");
      }}
      style={() => [
        {
          opacity: quantity === 0 ? 0.5 : 1,
        },
        {
          flexDirection: "row",
          backgroundColor: "#FFF",
          shadowColor: "#000",
          borderRadius: 8,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,
          elevation: 2,
        },
      ]}
    >
      <View
        style={{
          position: "absolute",
          top: -15 / 2,
          right: -15 / 2,
          backgroundColor: Colors.colorAqua,
          zIndex: 2,
          width: 25,
          height: 25,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 25 * 2,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Montserrat_700Bold",
            color: "#FFF",
          }}
        >
          {quantity}
        </Text>
      </View>
      <View style={{ paddingVertical: 28, paddingHorizontal: 20, flex: 1 }}>
        <Text
          style={{
            color: "#1C1B1F",
            fontFamily: "Montserrat_500Medium",
            fontSize: 16,
            marginBottom: 11,
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "#1C1B1F",
            fontFamily: "Montserrat_500Medium",
            fontSize: 14,
          }}
        >
          {text}
        </Text>
      </View>
      <Image
        source={{ uri: image }}
        style={{
          width: 120,
          height: "100%",
          resizeMode: "cover",
          borderTopRightRadius: 8,
          borderBottomRightRadius: 8,
          overflow: "hidden",
        }}
      />
    </Pressable>
  );
};

export default ServiceCard;
