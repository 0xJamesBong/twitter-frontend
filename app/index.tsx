// @ts-nocheck
import { Github, Twitter } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import {
  Button,
  H1,
  ListItem,
  Paragraph,
  Separator,
  YGroup,
  YStack
} from "tamagui";
import { ScrollView } from 'react-native';
import { Tweet } from '../components/Tweet';
import { TweetInput } from '../components/TweetInput';

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

export default function Home() {
  const router = useRouter();

  const sampleTweets = [
    {
      username: 'John Doe',
      handle: 'johndoe',
      content: 'Just setting up my Twitter clone! 🚀',
      timestamp: '2h',
      likes: 42,
      retweets: 5,
      replies: 3,
    },
    {
      username: 'Jane Smith',
      handle: 'janesmith',
      content: 'Building something amazing with @expo and @tamagui!',
      timestamp: '4h',
      likes: 128,
      retweets: 12,
      replies: 8,
    },
  ];

  return (
    <YStack flex={1}>
      <TweetInput onTweet={() => { }} />
      <ScrollView>
        {sampleTweets.map((tweet, index) => (
          <Tweet key={index} {...tweet} />
        ))}
      </ScrollView>
    </YStack>
  );
}
