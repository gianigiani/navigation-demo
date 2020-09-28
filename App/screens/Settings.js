import React from "react";
import { Button, SafeAreaView } from "react-native";
import navigation from "../config/navigation";

export default ({ navigation }) => (
  <SafeAreaView>
    <Button title="Toggle Drawer" onPress={() => navigator.toggleDrawer()} />
    <Button
      title="To Actions"
      onPress={() => {
        navigation.navigate("Tabs", {
          screen: "Actions",
          //   params: { userId: 123 },
        });
      }}
    />
  </SafeAreaView>
);
