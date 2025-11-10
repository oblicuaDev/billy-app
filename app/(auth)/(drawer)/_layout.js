import { Drawer } from "expo-router/drawer";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import WButon from "../../../src/components/WButon";
import Separator from "../../../src/components/Separator";
import Header from "../../../src/components/Header";
import { DrawerActions } from "@react-navigation/native";
import Colors from "../../../constant/Colors";
import { useSelector } from "react-redux";
import { selectUser } from "../../../src/store/selectors";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CustomDrawerContent({ navigation }) {
  const actualUser = useSelector(selectUser);
  return (
    <View style={{ paddingVertical: 16, paddingHorizontal: 10, flex: 1 }}>
      <Pressable
        style={styles.buttonHeader}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Image
          source={require("../../../assets/close.png")}
          style={{ width: 14, height: 14, resizeMode: "contain" }}
        />
      </Pressable>
      <View style={{ paddingHorizontal: 15 }}>
        <Text
          style={{
            color: Colors.colorTurquesa,
            fontFamily: "Montserrat_700Bold",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          ¡Hola!
        </Text>
        <Pressable
          style={{
            alignItems: "center",
            backgroundColor: "#FFF",
            borderColor: Colors.colorAqua,
            borderRadius: 20,
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
            paddingHorizontal: 16,
            paddingVertical: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text
            style={{
              color: Colors.colorAqua,
              fontFamily: "Montserrat_700Bold",
              fontSize: 14,
            }}
          >
            {actualUser.name}
          </Text>
        </Pressable>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <WButon
          label="Cerrar sesión"
          primary
          onPress={async () => await AsyncStorage.removeItem("@user")}
        />
      </View>
    </View>
  );
}
export default () => {
  return (
    <>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: () => {
            return <Header />;
          },
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#1C1B1F",
    textAlign: "center",
    fontFamily: "Montserrat_500Medium",
    fontSize: 14,
    padding: 24,
  },
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 40,
  },
});
