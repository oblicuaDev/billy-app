import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  Dimensions,
  StyleSheet,
  Animated,
  Easing,
  ScrollView,
} from "react-native";
import Colors from "../../constant/Colors";

const MiniStorie = ({ image, text }) => {
  // Define tu easing personalizado usando Easing.bezier
  const customEasing = Easing.bezier(0.16, 1, 0.3, 1);
  const [modalVisible, setModalVisible] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [heightImg] = useState(new Animated.Value(0));
  const [height] = useState(new Animated.Value(0));
  const [heightTxt] = useState(new Animated.Value(0));
  const [bgc] = useState(new Animated.Value(0));
  const [txtColor] = useState(new Animated.Value(0));

  const maxHeightImage = heightImg.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get("window").height, 220],
  });
  const maxHeight = height.interpolate({
    inputRange: [0, 1],
    outputRange: [150, Dimensions.get("window").height - 220],
  });
  const maxHeightText = heightTxt.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Dimensions.get("window").height],
  });
  const backgroundColor = bgc.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(51, 204, 204, 0.80)", "#FFF"],
  });
  const textColor = txtColor.interpolate({
    inputRange: [0, 1],
    outputRange: ["#FFF", Colors.colorTurquesa],
  });

  const showContent = () => {
    setIsContentVisible(true);
    Animated.parallel([
      Animated.timing(height, {
        toValue: 1,
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(bgc, {
        toValue: 1, // Cambia a 1 para el nuevo color de fondo
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(txtColor, {
        toValue: 1, // Cambia a 1 para el nuevo color de fondo
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(heightTxt, {
        toValue: 1, // Cambia a 1 para el nuevo color de fondo
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(heightImg, {
        toValue: 1, // Cambia a 1 para el nuevo color de fondo
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const hideContent = () => {
    setIsContentVisible(false);

    Animated.parallel([
      Animated.timing(height, {
        toValue: 0,
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(bgc, {
        toValue: 0, // Cambia a 0 para el color de fondo original
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(txtColor, {
        toValue: 0, // Cambia a 1 para el nuevo color de fondo
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(heightTxt, {
        toValue: 0, // Cambia a 1 para el nuevo color de fondo
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
      Animated.timing(heightImg, {
        toValue: 0, // Cambia a 1 para el nuevo color de fondo
        duration: 600,
        easing: customEasing,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
    isContentVisible ? hideContent() : showContent();
  };

  const renderHeaderButton = () => {
    return (
      <Pressable
        style={[styles.buttonHeader, infoOpen ? { left: 13 } : { right: 13 }]}
        onPress={infoOpen ? toggleInfo : closeModal}
      ></Pressable>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        {renderHeaderButton()}
        <Animated.Image
          style={{
            width: Dimensions.get("window").width,
            resizeMode: "cover",
            height: maxHeightImage,
          }}
          source={{
            uri: image,
          }}
        />
        <Animated.View
          style={[
            { height: maxHeight, backgroundColor: backgroundColor },
            {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              padding: 21,
              alignItems: "center",
            },
          ]}
        >
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            <Animated.Text
              style={[
                {
                  color: textColor,
                  fontFamily: "Montserrat_700Bold",
                  fontSize: 16,
                  marginBottom: 20,
                },
              ]}
            >
              {text}
            </Animated.Text>
            <Animated.Text
              style={[
                {
                  color: "#1C1B1F",
                  fontFamily: "Montserrat_400Regular",
                  fontSize: 14,
                  height: maxHeightText,
                },
              ]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Animated.Text>
            {!infoOpen && (
              <Pressable
                onPress={toggleInfo}
                style={{
                  borderRadius: 20,
                  borderColor: Colors.colorAqua,
                  borderWidth: 1.5,
                  backgroundColor: "#FFF",
                  padding: 8,
                  paddingHorizontal: 26,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Montserrat_500Medium",
                    color: Colors.colorAqua,
                  }}
                >
                  {infoOpen ? "Ver menos" : "Ver más"}
                </Text>
              </Pressable>
            )}
          </ScrollView>
        </Animated.View>
      </Modal>
      <Pressable
        onPress={openModal}
        style={{
          borderRadius: 4,
          width: 239,
          height: 359,
          backgroundColor: "#D9D9D9",
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          source={{
            uri: image,
          }}
        />
        <View
          style={{
            backgroundColor: "rgba(51, 204, 204, 0.80)",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: "Montserrat_700Bold",
              fontSize: 16,
            }}
          >
            {text}
          </Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  buttonHeader: {
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    marginBottom: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    position: "absolute",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 40,
    top: 13,
    zIndex: 5,
  },
});

export default MiniStorie;
