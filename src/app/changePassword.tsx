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

export default function ChangePassword() {
  const router = useRouter();

  // Kaun sa field is waqt active hai, usay track karne ke liye state
  const [activeField, setActiveField] = useState("oldPassword");

  return (
    <ImageBackground
      source={require("@/assets/images/signin.png")} // Background image peeche set hai
      style={styles.main}
      resizeMode="cover"
    >
      {/* Top Illustration Vector (Shield aur Lock wali picture ab yahan load hogi) */}
      <Image
        source={require("@/assets/images/lock.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        {/* Main Headings */}
        <Text style={styles.heading}>Change Password</Text>
        <Text style={styles.subHeading}>Please enter new credentials</Text>

        {/* ------- 1. Enter Old Password Field ------- */}
        <View
          style={
            activeField === "oldPassword"
              ? styles.inputBoxActive
              : styles.inputBoxNormal
          }
        >
          <Text
            style={[
              styles.textIcon,
              { color: activeField === "oldPassword" ? "#0474ED" : "#8A8A8A" },
            ]}
          >
            <Ionicons name="lock-open-outline" size={24} color="black" />
          </Text>
          <TextInput
            placeholder="Enter Old Password"
            placeholderTextColor={
              activeField === "oldPassword" ? "#0474ED" : "#8A8A8A"
            }
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setActiveField("oldPassword")}
          />
          <Text
            style={[
              styles.textIconRight,
              { color: activeField === "oldPassword" ? "#0474ED" : "#8A8A8A" },
            ]}
          >
            <SimpleLineIcons name="eye" size={24} color="black" />
          </Text>
        </View>

        {/* ------- 2. Enter New Password Field ------- */}
        <View
          style={
            activeField === "newPassword"
              ? styles.inputBoxActive
              : styles.inputBoxNormal
          }
        >
          <Text
            style={[
              styles.textIcon,
              { color: activeField === "newPassword" ? "#0474ED" : "#8A8A8A" },
            ]}
          >
            <Ionicons name="lock-open-outline" size={24} color="black" />
          </Text>
          <TextInput
            placeholder="Enter New Password"
            placeholderTextColor={
              activeField === "newPassword" ? "#0474ED" : "#8A8A8A"
            }
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setActiveField("newPassword")}
          />
          <Text
            style={[
              styles.textIconRight,
              { color: activeField === "newPassword" ? "#0474ED" : "#8A8A8A" },
            ]}
          >
            <SimpleLineIcons name="eye" size={24} color="black" />
          </Text>
        </View>

        {/* ------- 3. Confirm Password Field ------- */}
        <View
          style={
            activeField === "confirmPassword"
              ? styles.inputBoxActive
              : styles.inputBoxNormal
          }
        >
          <Text
            style={[
              styles.textIcon,
              {
                color:
                  activeField === "confirmPassword" ? "#0474ED" : "#8A8A8A",
              },
            ]}
          >
            <Ionicons name="lock-open-outline" size={24} color="black" />
          </Text>
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={
              activeField === "confirmPassword" ? "#0474ED" : "#8A8A8A"
            }
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setActiveField("confirmPassword")}
          />
          <Text
            style={[
              styles.textIconRight,
              {
                color:
                  activeField === "confirmPassword" ? "#0474ED" : "#8A8A8A",
              },
            ]}
          >
            <SimpleLineIcons name="eye" size={24} color="black" />
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            router.replace("/sign-in"); // Password change hone ke baad wapas sign in screen par bhejne ke liye
          }}
        >
          <Text style={styles.buttonText}>Change password</Text>
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
    marginTop: 20,
    marginBottom: 15,
  },
  container: {
    width: "100%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 5,
    marginTop: 15,
  },
  subHeading: {
    fontSize: 14,
    color: "#8A8A8A",
    marginBottom: 30,
    marginTop: 5,
  },
  // Active border style (Blue border aur light background)
  inputBoxActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    borderWidth: 1.5,
    borderColor: "#0474ED",
    borderRadius: 50,
    height: 54,
    paddingHorizontal: 20,
    marginBottom: 16,
    marginTop: 30,
  },
  // Normal state style (Grey background)
  inputBoxNormal: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 50,
    height: 54,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  textIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  textIconRight: {
    fontSize: 16,
    marginLeft: 10,
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
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
