import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); // State for phone number input
  const navigation = useNavigation(); // React Navigation hook

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://192.168.29.49:3000/user/send-otp",
        {
          phone: phoneNumber,
        }
      );

      if (response.status === 200) {
        Alert.alert(
          "Success",
          "OTP sent successfully. Please check your phone."
        );
        navigation.navigate("OtpVarification", { phoneNumber });
      }
    } catch (error) {
      console.error("Network error:", error);
      Alert.alert("Error", "Failed to send OTP. Check network connection.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/login_image.png")}
          style={styles.logo}
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.loginHeading}>Login</Text>
        <Text style={styles.subText}>Enter your phone number to login</Text>
        <View style={styles.inputContainer}>
          <View style={styles.countryCodeContainer}>
            <Text style={styles.countryCode}>+91</Text>
          </View>
          <TextInput
            style={styles.phoneInput}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            placeholderTextColor="#999" // Subtle placeholder color
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>Login</Text>
            <Icon
              name="arrow-forward"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2fcff",
    fontFamily: "PoppinsRegular",
  },
  topSection: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logo: {
    width: 350,
    height: 350,
  },
  bottomSection: {
    flex: 3,
    padding: 20,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  loginHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 10,
    elevation: 5, // Creates shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    marginVertical: 15,
    height: 50, // Ensures consistent height
  },
  countryCodeContainer: {
    backgroundColor: "#F0F0F0", // Slightly gray background for code
    borderRadius: 20,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  phoneInput: {
    fontSize: 16,
    flex: 1,
    color: "#333",
  },
  button: {
    backgroundColor: "#047afc",
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5, // Add spacing between text and icon
  },
  icon: {
    marginLeft: 185,
  },
});

export default LoginScreen;
