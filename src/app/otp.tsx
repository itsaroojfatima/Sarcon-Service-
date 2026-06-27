import { useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function EnterOTP() {
  const router = useRouter();

  // 4 alag OTP boxes ke liye states aur references
  const [otp, setOtp] = useState(["6", "6", "6", "6"]);
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const handleOtpChange = (text: string, index: number, nextRef: any) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && nextRef) {
      nextRef.current.focus();
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/signin.png")}
      style={styles.main}
      resizeMode="cover"
    >
      {/* Top Illustration Vector */}
      <Image source={require("@/assets/images/otp.png")} style={styles.image} />

      <View style={styles.container}>
        {/* Main Headings */}
        <Text style={styles.heading}>Enter OTP</Text>
        <Text style={styles.subHeading}>
          Enter the OTP which we sent to your email for verification
        </Text>

        {/* ------- 4 Digit OTP Input Boxes Row ------- */}
        <View style={styles.otpRow}>
          <View style={styles.otpBoxActive}>
            <TextInput
              ref={pin1Ref}
              value={otp[0]}
              onChangeText={(text) => handleOtpChange(text, 0, pin2Ref)}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpInput}
              textAlign="center"
            />
          </View>

          <View style={styles.otpBoxActive}>
            <TextInput
              ref={pin2Ref}
              value={otp[1]}
              onChangeText={(text) => handleOtpChange(text, 1, pin3Ref)}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpInput}
              textAlign="center"
            />
          </View>

          <View style={styles.otpBoxActive}>
            <TextInput
              ref={pin3Ref}
              value={otp[2]}
              onChangeText={(text) => handleOtpChange(text, 2, pin4Ref)}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpInput}
              textAlign="center"
            />
          </View>

          <View style={styles.otpBoxActive}>
            <TextInput
              ref={pin4Ref}
              value={otp[3]}
              onChangeText={(text) => handleOtpChange(text, 3, null)}
              keyboardType="number-pad"
              maxLength={1}
              style={styles.otpInput}
              textAlign="center"
            />
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            alert("OTP Verified Successfully!");
            router.push("/changePassword");
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 30,
    marginBottom: 20,
  },
  container: {
    width: "100%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 14,
    color: "#8A8A8A",
    lineHeight: 20,
    marginBottom: 35,
  },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  otpBoxActive: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#EAEAEA",
    borderRadius: 16,
    width: 65,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  otpInput: {
    fontSize: 22,
    color: "#8A8A8A",
    fontWeight: "500",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#0474ED",
    borderRadius: 50,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
