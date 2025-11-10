import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { router } from "expo-router";
import MiniStorie from "../../../../src/components/MiniStorie";
import ServiceCard from "../../../../src/components/ServiceCard";
import Colors from "../../../../constant/Colors";
import services from "../../../../src/data/services";
import stories from "../../../../src/data/stories";

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={{ padding: 11 }}></View>
      </View>
    </ScrollView>
  );
};

export default Home;
