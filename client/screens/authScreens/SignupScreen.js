import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

const SignupScreen = ({ navigation, route }) => {
  const phoneNumber = route?.params?.phoneNumber || "";
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [landmark, setLandmark] = useState("");
  const [region, setRegion] = useState("");
  const [state, setState] = useState("");

  const handleSignup = async () => {
    // Validate required fields
    if (!firstname || !lastname || !email || !landmark || !region || !state) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Prepare data for API call
    const data = {
      firstname,
      lastname,
      email,
      landmark,
      region,
      state,
      phoneNumber,
    };

    try {
      const response = await axios.post(
        "http://192.168.29.49:3000/user/submit-form",
        data
      );

      if (response.status === 201) {
        Alert.alert("Success", "Profile created successfully!");
        navigation.navigate("Dashboard", { user: response.data });
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to create profile. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/fill_form.png")}
          style={styles.logo}
        />
      </View>

      {/* Form Section */}
      <View style={styles.formCard}>
        <Text style={styles.heading}>Complete Your Profile</Text>

        {/* First Name */}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#aaa"
          value={firstname}
          onChangeText={setFirstName}
        />

        {/* Last Name */}
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#aaa"
          value={lastname}
          onChangeText={setLastName}
        />

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* Phone Number (Read-only) */}
        <Text style={styles.phoneInput}>+91-{phoneNumber}</Text>

        {/* Landmark */}
        <TextInput
          style={styles.input}
          placeholder="Landmark"
          placeholderTextColor="#aaa"
          value={landmark}
          onChangeText={setLandmark}
        />

        {/* Region */}
        <TextInput
          style={styles.input}
          placeholder="Region"
          placeholderTextColor="#aaa"
          value={region}
          onChangeText={setRegion}
        />

        {/* State */}
        <TextInput
          style={styles.input}
          placeholder="State"
          placeholderTextColor="#aaa"
          value={state}
          onChangeText={setState}
        />

        {/* Signup Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Let's Go!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2fcff",
    justifyContent: "center",
  },
  topSection: {
    alignItems: "center",
  },
  logo: {
    height: 250,
    width: 230,
    marginTop: -30,
  },
  formCard: {
    backgroundColor: "#f3fafe",
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop: -15,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
    backgroundColor: "#ffffff",
  },
  phoneInput: {
    height: 50,
    lineHeight: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#555",
    backgroundColor: "#f9f9f9",
    marginBottom: 15,
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#0064ff",
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SignupScreen;
