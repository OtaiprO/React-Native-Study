// import {
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   ScrollView,
//   Button,
//   Pressable,
//   Modal,
//   StatusBar,
//   ActivityIndicator,
//   Alert,
// } from "react-native";
// import { useState } from "react";

// import { Colors } from "react-native/Libraries/NewAppScreen";
// const logoImg = require("./assets/adaptive-icon.png");

// import Greet from "./components/Greet";

// export default function app() {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   return (
//     <View style={{ flex: 1, backgroundColor: "cyan", padding: 60 }}>
//       <ScrollView>
//         {/* <View style={{ width: 200, height: 200, backgroundColor: "red" }}></View>

//       <View
//         style={{ width: 200, height: 200, backgroundColor: "orange" }}
//       ></View> */}
//         {/* <Text>
//         <Text style={{ color: "white" }}> Hello</Text> World!
//       </Text> */}
//         {/* <Image source={logoImg} style={{ width: 200, height: 200 }} />
//         <Text>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
//           the printing and typesetting industry. Lorem Ipsum has been the
//           industry's standard dummy text ever since the 1500s, when an unknown
//           printer took a galley of type and scrambled it to make a type specimen
//           book. It has survived not only five centuries, but also the leap into
//           electronic typesetting, remaining essentially unchanged. It was
//           popularised in the 1960s with the release of Letraset sheets
//           containing Lorem Ipsum passages, and more recently with desktop
//           publishing software like Aldus PageMaker including versions of Lorem
//           Ipsum. Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's standard
//           dummy text ever since the 1500s, when an unknown printer took a galley
//           of type and scrambled it to make a type specimen book. It has survived
//           not only five centuries, but also the leap into electronic
//           typesetting, remaining essentially unchanged. It was popularised in
//           the 1960s with the release of Letraset sheets containing Lorem Ipsum
//           passages, and more recently with desktop publishing software like
//           Aldus PageMaker including versions of Lorem Ipsum.
//         </Text> */}
//         {/* <Image source={logoImg} style={{ width: 200, height: 200 }} /> */}

//         {/* <Image
//         source={{ uri: "https://picsum.photos/300" }}
//         style={{ width: 200, height: 200 }}
//       /> */}
//         {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
//         <Text>Image Potential Text</Text>
//       </ImageBackground> */}
//         {/* <Button
//           title="Press"
//           onPress={() => console.log("Is Pressed")}
//           color="midnightblue"
//           // disabled
//         /> */}
//         {/* <Button
//           title="Press to Open"
//           onPress={() => setIsModalVisible(true)}
//           color="midnightblue"
//         />
//         <Modal
//           visible={isModalVisible}
//           onRequestClose={() => setIsModalVisible(false)}
//           animationType="slide"
//           presentationStyle="pageSheet"
//         >
//           <View style={{ flex: 1, backgroundColor: "red", padding: 60 }}>
//             <Button
//               title="Close"
//               color="midnightblue"
//               onPress={() => setIsModalVisible(false)}
//             />
//           </View>
//         </Modal> */}
//         {/* <StatusBar backgroundColor="lightgreen" barStyle="dark-content" hidden/> */}
//         {/* <ActivityIndicator
//           size="large"
//           color="midnightblue"
//           // animating={false}
//         /> */}
//         {/* <Button title="Alert" onPress={() => Alert.alert("Bye Bye World!")} /> */}
//         <Greet name="Abbe" />
//       </ScrollView>
//     </View>
//   );
// }

import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance
          <Text style={styles.boldText}>Inherited white but also in bold</Text>
        </Text>
      </View>
      <View style={[styles.box, styles.lightblueBox, styles.androidShadow]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.lightgreenBox, styles.boxShadow]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    padding: 60,
  },
  darkMode: {
    backgroundColor: "#171717",
    color: "white",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  box: {
    width: 250,
    height: 250,
    padding: 10,
  },
  lightblueBox: {
    backgroundColor: "lightblue",
  },
  lightgreenBox: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidShadow: {
    shadowColor: "#333333",
    elevation: 10,
  },
});
