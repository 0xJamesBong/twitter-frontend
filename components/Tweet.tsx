import { View, Image } from 'react-native';
import { Button, H4, Paragraph, XStack, YStack } from 'tamagui';
import { Heart, MessageCircle, Repeat2, Share2 } from '@tamagui/lucide-icons';

interface TweetProps {
    username: string;
    handle: string;
    content: string;
    timestamp: string;
    likes: number;
    retweets: number;
    replies: number;
    avatarUrl?: string;
}

export function Tweet({
    username,
    handle,
    content,
    timestamp,
    likes,
    retweets,
    replies,
    avatarUrl = 'https://picsum.photos/200',
}: TweetProps) {
    return (
        <YStack
            padding="$4"
            borderBottomWidth={1}
            borderBottomColor="$gray5"
            space="$2"
        >
            <XStack space="$3">
                <Image
                    source={{ uri: avatarUrl }}
                    style={{ width: 48, height: 48, borderRadius: 24 }}
                />
                <YStack flex={1}>
                    <XStack space="$2" alignItems="center">
                        <H4>{username}</H4>
                        <Paragraph color="$gray11">@{handle}</Paragraph>
                        <Paragraph color="$gray11">· {timestamp}</Paragraph>
                    </XStack>
                    <Paragraph>{content}</Paragraph>
                    <XStack justifyContent="space-between" marginTop="$2">
                        <Button
                            icon={MessageCircle}
                            size="$3"
                            chromeless
                            color="$gray11"
                        >
                            {replies}
                        </Button>
                        <Button
                            icon={Repeat2}
                            size="$3"
                            chromeless
                            color="$gray11"
                        >
                            {retweets}
                        </Button>
                        <Button
                            icon={Heart}
                            size="$3"
                            chromeless
                            color="$gray11"
                        >
                            {likes}
                        </Button>
                        <Button
                            icon={Share2}
                            size="$3"
                            chromeless
                            color="$gray11"
                        />
                    </XStack>
                </YStack>
            </XStack>
        </YStack>
    );
} 