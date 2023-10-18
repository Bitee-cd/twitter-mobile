import { Image, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import { TweetType } from "../../types";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "../icon-button/IconButton";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};
const Tweet = ({ tweet }: TweetProps) => {
  return (
    <Link href={`/tweet/${tweet.id}?filter=recent`} asChild>
      <Pressable style={styles.container}>
        <Image source={{ uri: tweet.user.image }} style={styles.userImage} />
        <View style={styles.mainContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>{tweet.user.name}</Text>
            <Text style={styles.username}>{tweet.user.username}. 2h</Text>
            <Entypo
              name="dots-three-horizontal"
              size={16}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
          <Text style={styles.content}>{tweet.content}</Text>

          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.image} />
          )}
          <View style={styles.footer}>
            <IconButton icon="comment" text={tweet.numberOfComments} />
            <IconButton icon="retweet" text={tweet.numberOfRetweets} />
            <IconButton icon="heart" text={tweet.numberOfLikes} />
            <IconButton icon="chart" text={tweet.impressions || 0} />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export default Tweet;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  userImage: { width: 50, height: 50, borderRadius: 50 },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});
