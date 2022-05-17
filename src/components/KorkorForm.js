import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useForm, useController } from "react-hook-form";

function HookForm() {
  const { control, handleSubmit } = useForm();
}

const KorkorForm = () => {
  const [school, setSchool] = useState(null);
  const [emailAddress, setEmailAddress] = useState(null);
  const [name, setName] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const submitHandler = () => {
    Alert.alert(
      "Form submitted !"`school:${school}, emailAddress:${emailAddress}, name: ${name}, nickName: ${nickName}, phoneNumber=${phoneNumber},[{text:"OK"}]`
    );
  };

  return (
    <View>
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
      <Touchableopacity title="submit" onPress={submitHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default KorkorForm;
