import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
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
      {/* Figma standard top image design setup */}
      <Image
        source={require("@/assets/images/group.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.heading}>Sign In</Text>
        <Text style={styles.subHeading}>Please login to continue</Text>

        {/* ------- EMAIL INPUT CONTAINER ------- */}
        <View
          style={
            activeField === "email"
              ? styles.inputBoxActive
              : styles.inputBoxNormal
          }
        >
          {/* Email Icon Component */}
          <Fontisto
            name="email"
            size={20}
            color={activeField === "email" ? "#0474ED" : "#8A8A8A"}
            style={styles.vectorIconLeft}
          />
          <TextInput
            placeholder="Email address"
            placeholderTextColor={
              activeField === "email" ? "#0474ED" : "#8A8A8A"
            }
            style={styles.input}
            onFocus={() => setActiveField("email")}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* ------- PASSWORD INPUT CONTAINER ------- */}
        <View
          style={
            activeField === "password"
              ? styles.inputBoxActive
              : styles.inputBoxNormal
          }
        >
          {/* Password Lock Icon Component */}
          <Ionicons
            name="lock-open-outline"
            size={20}
            color={activeField === "password" ? "#0474ED" : "#8A8A8A"}
            style={styles.vectorIconLeft}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#8A8A8A"
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setActiveField("password")}
          />

          {/* Right Action Eye Icon */}
          <TouchableOpacity activeOpacity={0.7} style={styles.vectorIconRight}>
            <SimpleLineIcons
              name="eye"
              size={18}
              color={activeField === "password" ? "#0474ED" : "#8A8A8A"}
            />
          </TouchableOpacity>
        </View>

        {/* Links & Buttons Layout Structure */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.push("/forgetPassword")}
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
          <Text style={styles.linkText} onPress={() => router.push("/sign-up")}>
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
    paddingLeft: 22, // Left side padding balanced perfectly
    paddingRight: 16,
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
    paddingLeft: 22,
    paddingRight: 16,
    marginBottom: 20,
  },
  vectorIconLeft: {
    marginRight: 14, // Yeh hai exact figma gap spacing icon aur text ke beech!
  },
  vectorIconRight: {
    padding: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1E1E1E",
    height: "100%", // Input hit area completely smooth settings
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
