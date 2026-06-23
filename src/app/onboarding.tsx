import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();
  const [role, setRole] = useState("user");

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Are you!</Text>
      <Text style={styles.subHeading}>
        Please Select your role for this app.
      </Text>

      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setRole("user")}
        >
          <View style={styles.radio}>
            {role === "user" && <View style={styles.radioBg} />}
          </View>
          <Text style={styles.radioText}>User Side</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setRole("user")}>
          <View style={role === "user" ? styles.wrapperActive : styles.wrapper}>
            <Image
              source={require("@/assets/images/boarding.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>-Or-</Text>

      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          style={styles.radioContainer}
          onPress={() => setRole("provider")}
        >
          <View style={styles.radio}>
            {role === "provider" && <View style={styles.radioBg} />}
          </View>
          <Text style={styles.radioText}>Service Provider</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setRole("provider")}>
          <View
            style={role === "provider" ? styles.wrapperActive : styles.wrapper}
          >
            <Image
              source={require("@/assets/images/onboarding 2.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E1E1E",
  },
  subHeading: {
    color: "#1E1E1E",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 30,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioText: {
    fontSize: 15,
    color: "#1E1E1E",
    fontWeight: "bold",
  },
  radio: {
    width: 18,
    height: 18,
    borderColor: "#0474ED",
    borderRadius: 20,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioBg: {
    backgroundColor: "#0474ED",
    height: 10,
    width: 10,
    borderRadius: 20,
  },
  wrapper: {
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 2.5,
    borderColor: "transparent",
  },
  wrapperActive: {
    borderWidth: 2.5,
    borderColor: "#0474ED",
    borderRadius: 24,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 155,
  },
  or: {
    textAlign: "center",
    color: "#B0AAAA",
    marginVertical: 5,
  },
  button: {
    width: 120,
    height: 48,
    backgroundColor: "#0474ED",
    borderRadius: 20,
    alignSelf: "flex-end",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
