import { useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

const OtpVerificationScreen = ({ route }) => {
  const navigation = useNavigation();
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // 6-digit OTP
  const inputs = useRef([]);

  // Handle OTP input changes
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus on the next field if available
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
    // Automatically focus on the previous field if deleting
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // Validate OTP with backend
  const handleValidateOtp = async () => {
    const enteredOtp = otp.join(""); // Combine OTP array into a string
    if (enteredOtp.length !== 6) {
      Alert.alert("Invalid OTP", "Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.29.49:3000/user/verify-otp",
        {
          phone: phoneNumber,
          otp: enteredOtp,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "OTP verified successfully.");
        navigation.navigate("Signup", { phoneNumber });
      }
    } catch (error) {
      Alert.alert("Error", "Failed to validate OTP. Please try again.");
      console.error(error);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setOtp(["", "", "", "", "", ""]); // Clear all OTP input fields
    try {
      const response = await axios.post(
        "http://192.168.29.49:3000/user/resend-otp",
        {
          phone: phoneNumber,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "OTP resent successfully.");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to resend OTP. Please try again.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/varify_otp.png")}
          style={styles.logo}
        />
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.heading}>Verify OTP</Text>
        <Text style={styles.subText}>
          OTP sent to your number:{" "}
          <Text style={styles.phoneNumber}>+91-{phoneNumber}</Text>
        </Text>

        {/* OTP Input */}
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleOtpChange(text, index)}
              ref={(ref) => (inputs.current[index] = ref)} // Save input refs
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleValidateOtp}>
          <Text style={styles.buttonText}>Validate</Text>
        </TouchableOpacity>

        {/* Resend Code */}
        <Text style={styles.resendText}>
          Didn't receive the OTP?{" "}
          <Text style={styles.resendLink} onPress={handleResendOtp}>
            Resend Code
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2fcff",
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
    height: 270,
  },
  bottomSection: {
    flex: 4,
    padding: 20,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  heading: {
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
  phoneNumber: {
    fontWeight: "bold",
    color: "#333",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  button: {
    backgroundColor: "#047afc",
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
  },
  resendText: {
    marginTop: 20,
    textAlign: "center",
    color: "#666",
  },
  resendLink: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
});

export default OtpVerificationScreen;
