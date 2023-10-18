export type User = {
  id: string;
  name: string;
  username: string;
  image: string;
};

export type TweetType = {
  content: string;
  createdAt: string;
  image: string;
  numberOfComments?: number;
  numberOfRetweets: number;
  numberOfLikes: number;
  impressions?: number;
  user: User;
  id: string;
};
