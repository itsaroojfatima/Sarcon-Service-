import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SubmitSuccessScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar transparent rakhi taake image upar tak touch ho sky */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Poori screen par tap karne se home par redirect karne ke liye wrapper */}
      <TouchableOpacity
        style={styles.clickableArea}
        activeOpacity={1} // Tap karne par koi blink effect nahi aayega, seamless lagega
        onPress={() => router.push("/home")} // Click par home screen par le jaye
      >
        <Image
          source={require("@/assets/images/submit.png")} // Aapki export ki hui poori screen wali image
          style={styles.fullScreenImage}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0474ED", // Safe fall-back color jo image ke themes se match karta hai
  },
  clickableArea: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Image poori screen par perfect stretch-free fit aayegi
  },
});
