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

  // Kaun sa field is waqt active hai, usay track karne ke liye state
  const [activeField, setActiveField] = useState("name");

  return (
    <ImageBackground
      source={require("@/assets/images/signin.png")} // Background image jesa pehle thi
      style={styles.main}
      resizeMode="cover"
    >
      {/* ScrollView lagaya taake saare inputs screen par fit aa sakein aur scroll ho sakein */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {/* Top Illustration Vector (Sign Up Mobile Phone Image) */}
        <Image
          source={require("@/assets/images/group.png")} // Aap iski jagah apni sign up wali image name change kar sakti hain
          style={styles.image}
        />

        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subHeading}>Please Sign Up to Join Us</Text>

          {/* ------- 1. Name Input Field ------- */}
          <View
            style={
              activeField === "name"
                ? styles.inputBoxActive
                : styles.inputBoxNormal
            }
          >
            <Text
              style={[
                styles.textIcon,
                { color: activeField === "name" ? "#0474ED" : "#8A8A8A" },
              ]}
            >
              👤
            </Text>
            <TextInput
              placeholder="Name"
              placeholderTextColor={
                activeField === "name" ? "#0474ED" : "#8A8A8A"
              }
              style={styles.input}
              onFocus={() => setActiveField("name")}
            />
          </View>

          {/* ------- 2. Email Input Field ------- */}
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
            >
              ✉
            </Text>
            <TextInput
              placeholder="Email"
              placeholderTextColor={
                activeField === "email" ? "#0474ED" : "#8A8A8A"
              }
              style={styles.input}
              onFocus={() => setActiveField("email")}
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
            <Text
              style={[
                styles.textIcon,
                { color: activeField === "phone" ? "#0474ED" : "#8A8A8A" },
              ]}
            >
              📞
            </Text>
            <TextInput
              placeholder="Phone"
              placeholderTextColor={
                activeField === "phone" ? "#0474ED" : "#8A8A8A"
              }
              keyboardType="phone-pad"
              style={styles.input}
              onFocus={() => setActiveField("phone")}
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
            <Text
              style={[
                styles.textIcon,
                { color: activeField === "password" ? "#0474ED" : "#8A8A8A" },
              ]}
            >
              🔒
            </Text>
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
              👁
            </Text>
          </View>

          {/* ------- 5. Confirm Password Input Field ------- */}
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
              🔒
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
              👁
            </Text>
          </View>

          {/* ------- 6. Address Input Field ------- */}
          <View
            style={
              activeField === "address"
                ? styles.inputBoxActive
                : styles.inputBoxNormal
            }
          >
            <Text
              style={[
                styles.textIcon,
                { color: activeField === "address" ? "#0474ED" : "#8A8A8A" },
              ]}
            >
              📍
            </Text>
            <TextInput
              placeholder="Address"
              placeholderTextColor={
                activeField === "address" ? "#0474ED" : "#8A8A8A"
              }
              style={styles.input}
              onFocus={() => setActiveField("address")}
            />
          </View>

          {/* Terms & Conditions Text */}
          <Text style={styles.termsText}>
            I agree to <Text style={styles.termsBold}>Terms</Text> and{" "}
            <Text style={styles.termsBold}>conditions</Text> & Privacy.
          </Text>

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => alert("Registration Successful!")}
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
  // Jab input focus ho jaye (Border active blue)
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
  // Normal state (Grey style)
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
  termsText: {
    fontSize: 12,
    color: "#8A8A8A",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 25,
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
