import { Stack } from "expo-router";

export default function RegisterLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="user" />
      <Stack.Screen name="pet" />
    </Stack>
  );
}
