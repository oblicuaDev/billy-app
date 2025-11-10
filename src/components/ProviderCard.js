import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import Colors from "../../constant/Colors";

const ProviderCard = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable
          style={[styles.buttonHeader, { right: 13 }]}
          onPress={closeModal}
        ></Pressable>
        <Image
          style={{
            width: Dimensions.get("window").width,
            resizeMode: "cover",
            height: 280,
          }}
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/d275/bf8b/2425a5fe1df14d5375000635e01758f5?Expires=1695600000&Signature=Kss2xBtchNFmbkLlCcaYbgiUwGwvlCiTWnvT9IZD9jL42NFTBGGxEPljnxfe~Ul6L4Re2a-wf-E22ldUri3iHq7zGAj8cb51qs~34mkNTdKzz54u5M1aMxbf1eguTeOa-WJO8OZcoh9BNHb8SOP~syDN4IWty5TqBgIPCrlQon8h4UH1l5lB2l1QrzUIXJAohzbrRs8JYWQAS8VkBF4PDUzjrFoGKFZ4Tz8YLb8TFcsQvIqu5JCU4nDRP32RsjK9NOoGH-ZW2fnaoJ9rOkWWVyLG~mVp92uCRAvR4jm2Kh1hTISA4DmJ7df5cQlxX~QzE-3QF5Exxhqk4o8tw83RNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          }}
        />
        <View
          style={[
            {
              alignItems: "center",
              backgroundColor: "#FFF",
              paddingTop: 50,
              paddingHorizontal: 20,
              borderRadius: 35,
              width: "100%",
              flex: 1,
              transform: [{ translateY: -50 }],
            },
          ]}
        >
          <Text
            style={[
              {
                fontFamily: "Montserrat_700Bold",
                fontSize: 16,
                marginBottom: 10,
                color: Colors.colorTurquesa,
              },
            ]}
          >
            Pixie
          </Text>
          <Text
            style={[
              {
                color: "#1C1B1F",
                fontFamily: "Montserrat_400Regular",
                fontSize: 14,
              },
            ]}
          >
            Nuestro compromiso es trabajar por el bienestar de las mascotas. En
            Pixie creemos que una buena alimentación es la clave para que lleven
            una vida saludable.
          </Text>

          <Pressable
            onPress={() => {}}
            style={{
              borderRadius: 8,
              borderColor: Colors.colorAqua,
              borderWidth: 1.5,
              backgroundColor: Colors.colorAqua,
              padding: 11,
              paddingHorizontal: 26,
              alignItems: "center",
              position: "absolute",
              bottom: 0,
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Montserrat_500Medium",
                color: "#FFF",
              }}
            >
              Usar esta asesoría nutricional
            </Text>
          </Pressable>
        </View>
      </Modal>
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
        <View style={{ paddingVertical: 24, paddingHorizontal: 20, flex: 1 }}>
          <Text
            style={{
              color: "#1C1B1F",
              fontFamily: "Montserrat_500Medium",
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            Pixie
          </Text>
          <Text
            style={{
              color: "#B0B0B0",
              fontFamily: "Montserrat_400Regular",
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            En Pixie creemos que la alimentación es la clave...
          </Text>
          <Pressable
            onPress={openModal}
            style={{
              backgroundColor: Colors.colorAqua,
              alignItems: "center",
              justifyContent: "center",
              paddingHorizontal: 36,
              paddingVertical: 8,
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
              Usar este servicio
            </Text>
          </Pressable>
        </View>
      </View>
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
export default ProviderCard;
