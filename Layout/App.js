import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    // <View style={{ backgroundColor: "red", flex: 1 }}></View>
    <View style={styles.container}>
      <Box style={{ backgroundColor: "cyan", flex: 1 }}>Box 1</Box>
      <Box style={{ backgroundColor: "pink", flex: 1 }}>Box 2</Box>
      <Box style={{ backgroundColor: "green", flex: 2 }}>Box 3</Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderWidth: 6,
    borderColor: "plum",
  },
});
