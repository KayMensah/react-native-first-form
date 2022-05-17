import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import profile from "./assets/img/profile.jpg";
import Label, { Orientation } from "react-native-label";

const App = () => {
  const [school, setSchool] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [name, setName] = useState(null);
  const [nickName, setNickname] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const submitHandler = () => {
    Alert.alert(
      "Form submitted !"`school:${school}, emailAddress:${emailAddress}, name: ${name}, nickName: ${nickName}, phoneNumber=${phoneNumber},[{text:"OK"}]`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          backgroundColor: "white",
          flex: 5,
          flexDirection: "row",
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={{ marginLeft: 150, fontSize: 15, fontWeight: "bold" }}>
          Edit Profile
        </Text>
      </View>
      <View style={{ backgroundColor: "white", flex: 25 }}>
        <Image
          source={profile}
          style={{
            height: 210,
            width: 130,
            resizeMode: "contain",
            flexDirection: "row",
            marginHorizontal: 150,
          }}
        />
      </View>
      <View style={{ flex: 55 }}>
        {/* <KorkorForm /> */}

        <TextInput
          style={styles.input}
          onChangeText={setSchool}
          placeholder="School"
        />
        <TextInput
          style={styles.input}
          onChangeText={setEmailAddress}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.input}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNickname}
          placeholder="Nickname"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPhoneNumber}
          placeholder="Phone Number"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            borderWidth: 2,
            borderRadius: 5,
            height: 40,
            width: 120,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 30,
            marginHorizontal: 140,
            margin: 70,
          }}
          onPress={submitHandler}
        >
          <Text>Submit !</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 5,
          flexDirection: "row",
          paddingHorizontal: 32,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Ionicons name="md-home-outline" size={24} color="black" />

        <Text>Home</Text>

        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text>Notification</Text>
        <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        <Text>More</Text>
      </View>
    </SafeAreaView>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 300,
    marginHorizontal: 60,
  },
});

export default App;
