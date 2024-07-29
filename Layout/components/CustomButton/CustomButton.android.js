import React from "react";
import { Pressable, Text } from "react-native";

const CustomButton = ({ onPress, title }) => (
  <Pressable
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6200EE",
      borderRadius: 4,
      paddingVertical: 10,
      paddingHorizontal: 16,
      elevation: 2,
    }}
  >
    <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
      {title}
    </Text>
  </Pressable>
);

export default CustomButton;
