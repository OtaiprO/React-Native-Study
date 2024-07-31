// Inputs Study

// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   SafeAreaView,
//   TextInput,
//   Switch,
// } from "react-native";
// import { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("");
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   return (
//     <SafeAreaViewView style={styles.container}>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChange={setName}
//         placeholder="Your Name"
//         // secureTextEntry
//         // keyboardType=""
//         autoCorrect={false}
//         autoCapitalize="none"
//       />
//       <Text style={styles.Text}>my name is {name}</Text>

//       <TextInput
//         style={[styles.input, styles.multilineTextInput]}
//         placeholder="Multiline"
//         multiline
//       />
//       <View style={styles.switchContainer}>
//         <Text style={styles.text}>Dark Mode</Text>
//         <Switch
//           value={isDarkMode}
//           onValueChange={() => setIsDarkMode((previousState) => !previousState)}
//           trackColor={{ false: "red", true: "cyan" }}
//           thumbColor="orange"
//         />
//       </View>
//     </SafeAreaViewView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: StatusBar.currentHeight,
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     padding: 10,
//     borderWidth: 1,
//   },
//   text: {
//     fontSize: 30,
//     padding: 10,
//   },
//   multilineTextInput: {
//     minHeight: 100,
//     textAlignVertical: "top",
//   },
//   switchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: 10,
//   },
// });

// Login Forms Exercise

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is missing";
    if (!password) errors.password = "Password is missing";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button title="login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginButtom: 10,
  },
});
