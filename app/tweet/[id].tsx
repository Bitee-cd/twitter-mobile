import { View, Text } from "react-native";
import React from "react";

import { useGlobalSearchParams, useSearchParams } from "expo-router";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/tweet/tweet";

const TweetDetail = () => {
  const { id } = useGlobalSearchParams();

  const tweet = tweets.find((t) => id === t.id);
  if (!tweet) {
    return <Text>Tweet {id} not found</Text>;
  }
  return <Tweet tweet={tweet} />;
};

export default TweetDetail;
