/* LAYOUT TESTING */
// import { StyleSheet, View } from "react-native";
// import Box from "./components/Box";

// export default function App() {
//   return (
//     // <View style={{ backgroundColor: "red", flex: 1 }}></View>
//     <View style={styles.container}>
//       <Box style={{ backgroundColor: "cyan", flex: 1 }}>Box 1</Box>
//       <Box style={{ backgroundColor: "pink", flex: 1 }}>Box 2</Box>
//       <Box style={{ backgroundColor: "green", flex: 2 }}>Box 3</Box>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 64,
//     borderWidth: 6,
//     borderColor: "plum",
//   },
// });

/* Dimensions API */
// import { StyleSheet, View, Text, Dimensions } from "react-native";
// import { useState, useEffect } from "react";

// export default function App() {
//   const [dimensions, setDimensions] = useState({
//     window: Dimensions.get("window"),
//   });

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener("change", ({ window }) =>
//       setDimensions([window])
//     );
//     return () => subscription?.remove;
//   });

//   const { window } = dimensions;
//   const windowWidth = window.width;
//   const windowHeight = window.height;

//   return (
//     <View style={styles.container}>
//       <View
//         style={[
//           styles.box,
//           {
//             width: windowWidth > 500 ? "70%" : "90%",
//             height: windowHeight > 600 ? "60%" : "90%",
//           },
//         ]}
//       >
//         <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}></Text>
//       </View>
//     </View>
//   );
// }

// // const windowWidth = Dimensions.get("window").width;
// // const windowHeight = Dimensions.get("window").height;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "plum",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   box: {
//     // width: windowWidth > 500 ? "70%" : "90%",
//     // height: windowHeight > 600 ? "60%" : "90%",
//     backgroundColor: "lightblue",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   text: {
//     // fontSize: windowWidth > 500 ? 50 : 24,
//   },
// });

/* useWindowDimensions & Safe Area View */
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <CustomButton title="Press me" onPress={() => alert("Pressed")} />
        <View
          style={[
            styles.box,
            {
              width: windowWidth > 500 ? "70%" : "90%",
              height: windowHeight > 600 ? "60%" : "90%",
            },
          ]}
        >
          <Text
            style={[{ fontSize: windowWidth > 500 ? 50 : 24 }, styles.text]}
          >
            Welcome
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontWeight: "bold", textAlign: "center" },
});
