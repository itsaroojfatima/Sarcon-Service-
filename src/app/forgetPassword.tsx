import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ForgetPassword() {
  const router = useRouter();
  // Initially false rakha hai taake start mein normal look aaye, focus par active ho
  const [isActive, setIsActive] = useState(false);

  return (
    <ImageBackground
      source={require("@/assets/images/signin.png")}
      style={styles.main}
      resizeMode="cover"
    >
      <Image
        source={require("@/assets/images/illustration.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>Forget Password</Text>
        <Text style={styles.subHeading}>
          Opps. It happens to the best of us. Input your email to fix the issue.
        </Text>

        <View style={isActive ? styles.inputBoxActive : styles.inputBoxNormal}>
          {/* Email Icon: Space badhane ke liye 'styles.emailIcon' add kiya hai aur color dynamic kar diya hai */}
          <Fontisto
            name="email"
            size={20}
            color={isActive ? "#0474ED" : "#8A8A8A"}
            style={styles.emailIcon}
          />

          <TextInput
            placeholder="Email Address"
            placeholderTextColor={isActive ? "#0474ED" : "#8A8A8A"}
            style={styles.input}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            router.push("/changePassword");
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
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
    height: 220,
    resizeMode: "contain",
    marginTop: 70,
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
  inputBoxActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    borderWidth: 1.5,
    borderColor: "#0474ED",
    borderRadius: 50,
    height: 56,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  inputBoxNormal: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 50,
    height: 56,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  // Is styling se icon aur text ke beech perfect space ban jayegi
  emailIcon: {
    marginRight: 14,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1E1E1E",
  },
  button: {
    backgroundColor: "#0474ED",
    borderRadius: 50,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
