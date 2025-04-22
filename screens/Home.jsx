import { useEffect, useState } from "react";
import { Audio } from "expo-av";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Carousel from "../component/Carouselcomp";
import { Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
const styles = {
  
  Maintext: {
    color: "#314958",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingtop: 10,
    fontFamily: "Roboto-Medium",
  },
  SecondText: {
    color: "#6e7f8a",
    fontSize: 17,
    fontFamily: "Roboto-Medium",
    fontWeight: "bold",
    textAlign: "justify", // 👈 this makes it look neat
  },
  skillCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  skillText: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
};

const Home = () => {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    /* @info */ const { sound } = await Audio.Sound.createAsync(
      /* @end */ require("../assets/Hello.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await /* @info */ sound.playAsync(); /* @end */
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          /* @info Always unload the Sound after using it to prevent memory leaks.*/ sound.unloadAsync(); /* @end */
        }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView style={{}}>
        <Carousel />
        <View
          style={{
            backgroundColor: "#fafdff",
            borderRadius: 10,
            marginTop: -60,
            padding: 20,
            marginHorizontal: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            height: 690,
            elevation: 1,
          }}
        >
          <Text style={styles.Maintext}> Eng. Sughra Hassan </Text>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "b6bac3",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              Software Engineer
            </Text>
            <Ionicons
              name="code-working-outline"
              size={25}
              color="black"
              style={{ marginLeft: 5, textAlign: "center", fontWeight: "bold" }}
            />
          </View>

          <Text style={styles.SecondText}>
            I'm passionate about AI and backend development, with a strong focus
            on building intelligent, scalable web applications. I'm currently
            seeking opportunities to contribute and grow in a dynamic role
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "#000",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 18,
              }}
            >
              My Skills
            </Text>
            <Ionicons
              name="construct-outline"
              size={25}
              color="black"
              style={{ marginLeft: 5 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            {/* Skill Card Example */}
            <View style={styles.skillCard}>
              <Ionicons name="code-working-outline" size={24} color="black" />
              <Text style={styles.skillText}>AI & ML</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="code-slash-outline" size={24} color="black" />
              <Text style={styles.skillText}>Backend Dev</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="server" size={24} color="black" />
              <Text style={styles.skillText}>Databases</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="share-social-outline" size={24} color="black" />
              <Text style={styles.skillText}>API Development</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="logo-html5" size={24} color="black" />
              <Text style={styles.skillText}>Web Dev</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="cloud-outline" size={24} color="black" />
              <Text style={styles.skillText}>Cloud Deployment</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="chatbubbles-outline" size={24} color="black" />
              <Text style={styles.skillText}>Chatbot Dev</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="analytics-outline" size={24} color="black" />
              <Text style={styles.skillText}>Data Visualization</Text>
            </View>

            <View style={styles.skillCard}>
              <Ionicons name="file-tray-full-outline" size={24} color="black" />
              <Text style={styles.skillText}>OCR Tech</Text>
            </View>
          </View>

          <View style={styles.container}>
  <TouchableOpacity
    onPress={playSound}
    style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#1f2d3d",
      padding: 10,
      marginTop:15,
      borderRadius: 8,
      justifyContent: "center",
    }}
  >
    <Ionicons name="musical-notes-outline" size={24} color="#fff" />
    <Text style={{ color: "#fff", marginLeft: 8, fontWeight: "bold", textAlign: "center" }}>
      Play Sound
    </Text>
  </TouchableOpacity>
</View>

        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
