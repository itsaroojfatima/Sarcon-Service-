import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LocationScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("Barcelona, Spain");

  return (
    <View style={styles.main}>
      {/* Status bar ko translucent kiya taake header poora top tak touch ho */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B1521"
        translucent={false}
      />

      {/* ------- Top Theme Matching Dark Header ------- */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => router.back()}
        >
          <Text style={styles.headerText}>❮ Location</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content Body */}
      <View style={styles.content}>
        <Text style={styles.heading}>Set Your Location</Text>

        {/* ------- 1. Active Search Input Box ------- */}
        <View style={styles.searchBoxActive}>
          {/* Active Blue Search icon */}
          <Text style={styles.searchIconActive}>🔍</Text>

          <TextInput
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholder="Search Location"
            placeholderTextColor="#8A8A8A"
            style={styles.inputActive}
          />

          {/* Active Clear Text Cross Icon */}
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText("")}>
              <Text style={styles.clearIconActive}>✕</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* ------- 2. Active Map Area Container ------- */}
        <View style={styles.mapContainerActive}>
          <Image
            source={require("@/assets/images/location.png")} // Aap ka original colorful map asset
            style={styles.mapImage}
          />
        </View>

        {/* Save Location Button */}
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            alert("Location Saved Successfully!");
            router.push("/home");
          }}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#0B1521", // Sahi wala Dark Theme color jesa aapki image mein hai
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E1E1E",
    textAlign: "center",
    marginBottom: 25,
  },
  // Active Search bar design (Premium Blue Border & Light Tint)
  searchBoxActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F8FF",
    borderWidth: 1.5,
    borderColor: "#0474ED",
    borderRadius: 50,
    height: 52,
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  searchIconActive: {
    fontSize: 16,
    color: "#0474ED",
    marginRight: 10,
  },
  inputActive: {
    flex: 1,
    fontSize: 15,
    color: "#0474ED",
    fontWeight: "600",
  },
  clearIconActive: {
    fontSize: 14,
    color: "#0474ED",
    fontWeight: "bold",
    marginLeft: 10,
  },
  // Map Container Active Border
  mapContainerActive: {
    flex: 1,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#0474ED", // Map container ke baahar active blue boundary line
    backgroundColor: "#FFFFFF",
    marginBottom: 30,
    // iOS and Android Shadows for active look
    shadowColor: "#0474ED",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 4,
  },
  mapImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  button: {
    backgroundColor: "#0474ED",
    borderRadius: 50,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
