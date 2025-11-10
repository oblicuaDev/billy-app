import { Stack } from "expo-router";

export default () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="reset" options={{ headerShown: false }} />
      <Stack.Screen name="verifyCode" options={{ headerShown: false }} />
      <Stack.Screen name="change" options={{ headerShown: false }} />
    </Stack>
  );
};
