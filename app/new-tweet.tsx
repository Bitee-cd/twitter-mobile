import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};
const NewTweet = () => {
  const [text, setText] = useState("");

  const router = useRouter();
  const onPostTweet = () => {
    console.warn(text);
    router.back();
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 20 }}>
            Cancel
          </Link>
          <Pressable style={styles.button} onPress={onPostTweet}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <Image source={{ uri: user.image }} style={styles.image} />
          <TextInput
            placeholder="What's happening"
            multiline
            value={text}
            onChangeText={(text) => setText(text)}
            numberOfLines={5}
            style={{ flex: 1 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewTweet;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,

    flex: 1,
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignContent: "center",
  },
  button: {
    backgroundColor: "#1c9bf0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
