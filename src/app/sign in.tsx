import Feather from "@expo/vector-icons/Feather";
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

export default function SignIn() {
  const router = useRouter();
  const [activeField, setActiveField] = useState("email");

  return (
    <ImageBackground
      source={require("@/assets/images/signin.png")}
      style={styles.main}
      resizeMode="cover"
    >
      <Image
        source={require("@/assets/images/group.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subHeading}>Please login to continue</Text>

        <View
          style={
            activeField === "email"
              ? styles.inputBoxActive
              : styles.inputBoxNormal
          }
        >
          <Text
            style={[
              styles.textIcon,
              { color: activeField === "email" ? "#0474ED" : "#8A8A8A" },
            ]}
          ></Text>
          <Fontisto name="email" size={24} color="black" />
          <TextInput
            placeholder="Email address"
            placeholderTextColor={
              activeField === "email" ? "#0474ED" : "#8A8A8A"
            }
            style={styles.input}
            onFocus={() => setActiveField("email")}
          />
        </View>
        <View
          style={
            activeField === "password"
              ? styles.inputBoxActive
              : styles.inputBoxNormal
          }
        >
          <Text
            style={[
              styles.textIcon,
              { color: activeField === "password" ? "#0474ED" : "#8A8A8A" },
            ]}
          ></Text>
          <Feather name="unlock" size={24} color="black" />
          <TextInput
            placeholder="Password"
            placeholderTextColor={
              activeField === "password" ? "#0474ED" : "#8A8A8A"
            }
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setActiveField("password")}
          />

          <Text
            style={[
              styles.textIconRight,
              { color: activeField === "password" ? "#0474ED" : "#8A8A8A" },
            ]}
          >
            <Feather name="eye" size={24} color="black" />
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => alert("/forgetPassword")}
        >
          <Text style={styles.forgotText}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.bottomText}>
          Don't have an account?{" "}
          <Text style={styles.linkText} onPress={() => router.push("/signup")}>
            Sign up
          </Text>
        </Text>
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
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    width: "100%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 15,
    color: "#8A8A8A",
    marginBottom: 30,
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
    marginBottom: 20,
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
    marginBottom: 20,
  },
  textIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  textIconRight: {
    fontSize: 18,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1E1E1E",
  },
  forgotText: {
    color: "#0474ED",
    textAlign: "right",
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 35,
  },
  button: {
    backgroundColor: "#0474ED",
    borderRadius: 50,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 35,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomText: {
    textAlign: "center",
    color: "#8A8A8A",
    fontSize: 14,
  },
  linkText: {
    color: "#0474ED",
    fontWeight: "bold",
  },
});
