import { Image, Pressable, StyleSheet, View } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";
import tweets from "../../../assets/data/tweets";
import Tweet from "../../../components/tweet/tweet";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Link href="/new-tweet" asChild>
        <Entypo
          name="plus"
          size={24}
          color="white"
          style={styles.floatingButton}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    backgroundColor: "#1C9BF0",
    padding: 15,
    borderRadius: 50,

    textAlign: "center",
    position: "absolute",
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
