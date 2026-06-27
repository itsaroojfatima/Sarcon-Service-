import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VerificationSuccess() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("@/assets/images/signin.png")}
      style={styles.main}
      resizeMode="cover"
    >
      {/* Top Illustration Vector */}
      <Image
        source={require("@/assets/images/verify.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        {/* Exact Headings from Image */}
        <Text style={styles.heading}>Email Verification</Text>
        <Text style={styles.subHeading}>
          We send link at your email abc123@gmail.com verifiy it
        </Text>

        {/* Back to Login Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            router.push("/sign-in");
          }}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
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
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
    marginBottom: 35,
  },
  container: {
    width: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0474ED", // Blue text color jesa design mein hai
    textAlign: "center",
    marginBottom: 12,
  },
  subHeading: {
    fontSize: 14,
    color: "#1E1E1E", // Dark text color
    textAlign: "center",
    lineHeight: 20,
    paddingHorizontal: 20,
    marginBottom: 45,
  },
  button: {
    backgroundColor: "#0474ED",
    borderRadius: 50,
    height: 54,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
