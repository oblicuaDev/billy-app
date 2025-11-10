import { Tabs } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../../../constant/Colors";
import { FontAwesome } from "@expo/vector-icons";
function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        backgroundColor: Colors.colorTurquesa,
        borderRadius: 15,
        flexDirection: "row",
        marginHorizontal: 13,
        paddingHorizontal: 27,
        paddingVertical: 14,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const { tabBarIcon, tabBarActiveTintColor, tabBarInactiveTintColor } =
          options || {};

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
              style={{
                backgroundColor: isFocused ? "#FFF" : "transparent",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 52 * 2,
                width: 52,
                height: 52,
              }}
            >
              <Text
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
              >
                {tabBarIcon &&
                  tabBarIcon(
                    isFocused,
                    isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor
                  )}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default () => {
  return (
    <>
      <Tabs
        tabBar={(props) => <MyTabBar {...props} />}
        screenOptions={{
          tabBarActiveTintColor: Colors.colorAqua,
          tabBarInactiveTintColor: "#FFF",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: (focused, color) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};
