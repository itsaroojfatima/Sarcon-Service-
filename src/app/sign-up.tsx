import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUp() {
  const router = useRouter();
  const [activeField, setActiveField] = useState("");

  return (
    <ImageBackground
      source={require("@/assets/images/signin.png")}
      style={styles.main}
      resizeMode="cover"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Top Illustration Vector */}
        <Image
          source={require("@/assets/images/Group2.png")}
          style={styles.image}
        />

        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subHeading}>Please Sign Up to Join Us</Text>

          {/* ------- 1. Only Blue Icon and Text ------- */}
          <View style={styles.simpleBlueRow}>
            <Feather name="user" size={20} color="#0474ED" />
            <Text style={styles.blueText}>Name</Text>
          </View>

          {/* ------- 2. Email Input Field ------- */}
          <View
            style={
              activeField === "email"
                ? styles.inputBoxActive
                : styles.inputBoxNormal
            }
          >
            <Fontisto
              name="email"
              size={20}
              color={activeField === "email" ? "#0474ED" : "#8A8A8A"}
              style={styles.vectorIcon}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor={
                activeField === "email" ? "#0474ED" : "#8A8A8A"
              }
              style={styles.input}
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField("")}
            />
          </View>

          {/* ------- 3. Phone Input Field ------- */}
          <View
            style={
              activeField === "phone"
                ? styles.inputBoxActive
                : styles.inputBoxNormal
            }
          >
            <Feather
              name="phone"
              size={20}
              color={activeField === "phone" ? "#0474ED" : "#8A8A8A"}
              style={styles.vectorIcon}
            />
            <TextInput
              placeholder="Phone"
              placeholderTextColor={
                activeField === "phone" ? "#0474ED" : "#8A8A8A"
              }
              keyboardType="phone-pad"
              style={styles.input}
              onFocus={() => setActiveField("phone")}
              onBlur={() => setActiveField("")}
            />
          </View>

          {/* ------- 4. Password Input Field ------- */}
          <View
            style={
              activeField === "password"
                ? styles.inputBoxActive
                : styles.inputBoxNormal
            }
          >
            <Ionicons
              name="lock-open-outline"
              size={20}
              color={activeField === "password" ? "#0474ED" : "#8A8A8A"}
              style={styles.vectorIcon}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={
                activeField === "password" ? "#0474ED" : "#8A8A8A"
              }
              secureTextEntry={true}
              style={styles.input}
              onFocus={() => setActiveField("password")}
              onBlur={() => setActiveField("")}
            />
            <SimpleLineIcons
              name="eye"
              size={18}
              color={activeField === "password" ? "#0474ED" : "#8A8A8A"}
              style={styles.vectorIconRight}
            />
          </View>

          {/* ------- 5. Confirm Password Input Field ------- */}
          <View
            style={
              activeField === "confirmPassword"
                ? styles.inputBoxActive
                : styles.inputBoxNormal
            }
          >
            <Ionicons
              name="lock-open-outline"
              size={20}
              color={activeField === "confirmPassword" ? "#0474ED" : "#8A8A8A"}
              style={styles.vectorIcon}
            />
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={
                activeField === "confirmPassword" ? "#0474ED" : "#8A8A8A"
              }
              secureTextEntry={true}
              style={styles.input}
              onFocus={() => setActiveField("confirmPassword")}
              onBlur={() => setActiveField("")}
            />
            <SimpleLineIcons
              name="eye"
              size={18}
              color={activeField === "confirmPassword" ? "#0474ED" : "#8A8A8A"}
              style={styles.vectorIconRight}
            />
          </View>

          {/* ------- 6. Address Input Field ------- */}
          <View
            style={
              activeField === "address"
                ? styles.inputBoxActive
                : styles.inputBoxNormal
            }
          >
            <Ionicons
              name="location-outline"
              size={20}
              color={activeField === "address" ? "#0474ED" : "#8A8A8A"}
              style={styles.vectorIcon}
            />
            <TextInput
              placeholder="Address"
              placeholderTextColor={
                activeField === "address" ? "#0474ED" : "#8A8A8A"
              }
              style={styles.input}
              onFocus={() => setActiveField("address")}
              onBlur={() => setActiveField("")}
            />
          </View>

          {/* Terms & Conditions Row - Explicit row configuration to prevent splitting */}
          <View style={styles.termsContainer}>
            <Text
              style={styles.termsText}
              numberOfLines={1}
              adjustsFontSizeToFit={true}
              minimumFontScale={0.5}
            >
              I agree to <Text style={styles.termsBold}>Terms</Text> and{" "}
              <Text style={styles.termsBold}>conditions</Text> & Privacy.
            </Text>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => alert("/submit")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Bottom Login Text */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/sign-in")}
          >
            <Text style={styles.bottomText}>
              Already have an account?{" "}
              <Text style={styles.linkText}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 25,
    paddingTop: 40,
    paddingBottom: 30,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
    marginTop: 10,
    marginBottom: 10,
  },
  container: {
    width: "100%",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 3,
  },
  subHeading: {
    fontSize: 14,
    color: "#8A8A8A",
    marginBottom: 25,
  },
  simpleBlueRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 35,
    marginBottom: 14,
  },
  blueText: {
    fontSize: 15,
    color: "#0474ED",
    marginLeft: 14,
    fontWeight: "500",
  },
  inputBoxActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    borderWidth: 1.5,
    borderColor: "#0474ED",
    borderRadius: 50,
    height: 52,
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  inputBoxNormal: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 50,
    height: 52,
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  vectorIcon: {
    marginRight: 14,
  },
  vectorIconRight: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#1E1E1E",
  },
  // Row structure to enforce single line display
  termsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 12,
    marginBottom: 20,
    flexWrap: "nowrap",
  },
  termsText: {
    fontSize: 12,
    color: "#8A8A8A",
    textAlign: "center",
  },
  termsBold: {
    fontWeight: "600",
    color: "#1E1E1E",
  },
  button: {
    backgroundColor: "#0474ED",
    borderRadius: 50,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
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
