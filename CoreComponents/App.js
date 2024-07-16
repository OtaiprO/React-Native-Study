// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const logoImg = require("./assets/adaptive-icon.png");

export default function app() {
  return (
    <View style={{ flex: 1, backgroundColor: "cyan", padding: 60 }}>
      <ScrollView>
        {/* <View style={{ width: 200, height: 200, backgroundColor: "red" }}></View>

      <View
        style={{ width: 200, height: 200, backgroundColor: "orange" }}
      ></View> */}
        {/* <Text>
        <Text style={{ color: "white" }}> Hello</Text> World!
      </Text> */}
        {/* <Image source={logoImg} style={{ width: 200, height: 200 }} />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
        <Image source={logoImg} style={{ width: 200, height: 200 }} /> */}

        {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 200, height: 200 }}
      /> */}
        {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image Potential Text</Text>
      </ImageBackground> */}

        <Button
          title="Press"
          onPress={() => console.log("Is Pressed")}
          color="midnightblue"
          // disabled
        />
      </ScrollView>
    </View>
  );
}
