import { router, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Button,
} from "react-native";
import WButon from "../../src/components/WButon";
import FieldInput from "../../src/components/FieldInput";
import Separator from "../../src/components/Separator";
import SocialButton from "../../src/components/SocialButton";
import Colors from "../../constant/Colors";
import { useDispatch, useSelector } from "react-redux";
import UserActions from "../../src/store/actions/UserActions";
import { selectIsLogged } from "../../src/store/selectors";

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";

WebBrowser.maybeCompleteAuthSession();

const change = () => {
  // SIGNIN GOOGLE
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "360826425811-cqsl11j4vlku18fc7eofb7fmbfvae9oc.apps.googleusercontent.com",
    iosClientId:
      "360826425811-8pdja74a5h34j9ihuvro160f3ckdbb0e.apps.googleusercontent.com",
    webClientId:
      "360826425811-2mj7172f9b2lru9ok4jrjbrnks00gsd1.apps.googleusercontent.com",
  });
  const handleSignInWithGoogle = async () => {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        getUserInfo(response.authentication.accessToken);
      } else {
        setUserInfo(user);
      }
    }
  };
  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return null;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (e) {
      console.log(e);
    }
  };
  // SIGIN GOOGLE
  const isLogged = useSelector(selectIsLogged);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "l.carrillom05@gmail.com",
    password: "0bl1cu42026",
  });
  const [loading, setLoading] = useState(false);
  const onSignInPress = async () => {
    setLoading(true);
    try {
      const response = await dispatch(UserActions.fetchUserLogin(formValues));
      console.log(response);
      if (response) {
        router.push("/home");
      }
    } catch (err) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <LinearGradient
      colors={["#bc1efa", "#951ceb", "#4b29f2", "#1a2edb", "#1e6ffa"]}
      start={{ x: 0, y: 0.5 }} // equivale a 90deg (horizontal)
      end={{ x: 1, y: 0.5 }}
      style={styles.gradient}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 180,
          }}
        >
          <Image
            source={require("../../assets/oblicuav4.png")}
            style={{ width: 180, height: 80, resizeMode: "contain" }}
          />
        </View>

        <View
          style={{
            backgroundColor: "#FFF",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            flex: 1,
          }}
        >
          <ScrollView
            style={{ height: Dimensions.get("window").height - 150 }}
            fadingEdgeLength={30}
            contentContainerStyle={{
              paddingVertical: 40,
              paddingHorizontal: 20,
            }}
          >
            {/* <Button
            title="remove local store"
            onPress={async () => await AsyncStorage.removeItem("@user")}
          /> */}
            <Text
              style={{
                color: Colors.colorTurquesa,
                fontFamily: "Montserrat_700Bold",
                fontSize: 20,
                marginBottom: 17,
                textAlign: "center",
              }}
            >
              Restablecer contraseña
            </Text>
            <FieldInput
              label="Contraseña"
              value={formValues.email}
              onChangeText={(text) =>
                setFormValues((prevState) => ({
                  ...prevState,
                  email: text,
                }))
              }
              secureTextEntry
              placeholder="Campo de Texto"
            />
            <FieldInput
              label="Confirmar Contraseña"
              onChangeText={(text) =>
                setFormValues((prevState) => ({
                  ...prevState,
                  password: text,
                }))
              }
              secureTextEntry
              placeholder="Campo de Texto"
              value={formValues.password}
            />
            <WButon
              label="Enviar"
              primary
              onPress={onSignInPress}
              isLoading={loading}
            />
            <WButon label="Centro de ayuda" tertiary />
          </ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputField: {
    marginVertical: 10,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 8,
    lineHeight: 20,
    backgroundColor: "#D8E4E5",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default change;
