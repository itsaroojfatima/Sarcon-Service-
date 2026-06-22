import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Onboarding() {
  const router = useRouter();

  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Are you!</Text>
      <Text style={styles.subHeading}>
        Please Slect your role for this app.
      </Text>

      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={styles.radio}>
            <View style={styles.radioBg} />
          </View>
          <Text style={styles.radioText}>User Side</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.wrapper}>
            <Image
              source={require("@/assets/images/boarding.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.or}>-Or-</Text>
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={styles.radio}></View>
          <Text style={styles.radioText}>Service Provider</Text>
        </View>

        <TouchableOpacity>
          <View style={{ borderRadius: 24, overflow: "hidden" }}>
            <Image
              source={require("@/assets/images/onboarding 2.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 25,
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 180,
    color: "#1E1E1E",
  },
  subHeading: {
    color: "#1E1E1E",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 30,
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
  wrapper: {
    borderWidth: 2.5,
    borderColor: "#0474ED",
    borderRadius: 24,
    overflow: "hidden",
  },
  radioBg: {
    backgroundColor: "#0474ED",
    height: 10,
    width: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 155,
    overflow: "hidden",
  },
  or: {
    textAlign: "center",
    color: "#B0AAAA",
    marginVertical: 15,
  },
  button: {
    width: 120,
    height: 48,
    backgroundColor: "#0474ED",
    borderRadius: 20,
    alignSelf: "flex-end",
    marginTop: 25,
  },
});
