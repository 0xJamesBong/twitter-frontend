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
import { ScrollView, FlatList } from 'react-native';
import { Tweet } from '../components/Tweet';
import { TweetInput } from '../components/TweetInput';
import { useState } from 'react';

import { MySafeAreaView } from "../components/MySafeAreaView";
import { MyStack } from "../components/MyStack";

const sampleTweets = [
  {
    username: 'John Doe',
    handle: 'johndoe',
    content: 'Just setting up my Twitter clone! 🚀',
    timestamp: '2h',
    likes: 42,
    retweets: 5,
    replies: 3,
    views: 1000,
    isPinned: true,
  },
  {
    username: 'Jane Smith',
    handle: 'janesmith',
    content: 'Building something amazing with @expo and @tamagui!',
    timestamp: '4h',
    likes: 128,
    retweets: 12,
    replies: 8,
    views: 2500,
    mediaUrl: 'https://picsum.photos/400',
  },
  {
    username: 'Tech News',
    handle: 'technews',
    content: 'Breaking: New AI model achieves human-level performance in multiple tasks',
    timestamp: '6h',
    likes: 500,
    retweets: 200,
    replies: 50,
    views: 10000,
  },
];

export default function Home() {
  const [tweets, setTweets] = useState(sampleTweets);

  const handleTweet = (content: string) => {
    const newTweet = {
      username: 'Current User',
      handle: 'currentuser',
      content,
      timestamp: 'now',
      likes: 0,
      retweets: 0,
      replies: 0,
      views: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <YStack flex={1}>
      <TweetInput onTweet={handleTweet} />
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet {...item} />}
        keyExtractor={(item, index) => `${item.handle}-${index}`}
        onEndReached={() => {
          // Load more tweets
          setTweets([...tweets, ...sampleTweets]);
        }}
        onEndReachedThreshold={0.5}
      />
    </YStack>
  );
}
