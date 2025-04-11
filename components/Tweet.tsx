import { Image } from 'react-native';
import { Button, H4, Paragraph, XStack, YStack, useTheme } from 'tamagui';
import {
    Heart,
    MessageCircle,
    Repeat2,
    Share2,
    Bookmark,
    BarChart2,
} from '@tamagui/lucide-icons';
import { MotiView } from 'moti';
import { useRouter } from 'expo-router';

interface TweetProps {
    username: string;
    handle: string;
    content: string;
    timestamp: string;
    likes: number;
    retweets: number;
    replies: number;
    views?: number;
    avatarUrl?: string;
    mediaUrl?: string;
    isPinned?: boolean;
}

export function Tweet({
    username,
    handle,
    content,
    timestamp,
    likes,
    retweets,
    replies,
    views,
    avatarUrl = 'https://picsum.photos/200',
    mediaUrl,
    isPinned,
}: TweetProps) {
    const theme = useTheme();
    const router = useRouter();

    return (
        <MotiView
            from={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'timing', duration: 300 } as const}
        >
            <YStack
                padding="$4"
                borderBottomWidth={1}
                borderBottomColor="$gray5"
                space="$2"
                backgroundColor="white"
                pressStyle={{ backgroundColor: '$gray1' }}
                animation="quick"
            >
                {isPinned && (
                    <XStack space="$2" alignItems="center" marginBottom="$2">
                        <Bookmark size={16} color={theme.gray11.val} />
                        <Paragraph color="$gray11" fontSize="$2">
                            Pinned Tweet
                        </Paragraph>
                    </XStack>
                )}
                <XStack space="$3">
                    <MotiView
                        from={{ scale: 1 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 } as const}
                    >
                        <Button
                            circular
                            size="$4"
                            backgroundColor="$gray5"
                            pressStyle={{ backgroundColor: '$gray6' }}
                            onPress={() => router.push(`/users/${handle}`)}
                        />
                    </MotiView>
                    <YStack flex={1}>
                        <XStack space="$2" alignItems="center">
                            <H4 fontWeight="bold">{username}</H4>
                            <Paragraph color="$gray11" fontSize="$2">@{handle}</Paragraph>
                            <Paragraph color="$gray11" fontSize="$2">· {timestamp}</Paragraph>
                        </XStack>
                        <Paragraph fontSize="$4" lineHeight="$4" marginTop="$2">
                            {content}
                        </Paragraph>
                        {mediaUrl && (
                            <YStack marginTop="$2" borderRadius="$4" overflow="hidden">
                                <Image
                                    source={{ uri: mediaUrl }}
                                    style={{ width: '100%', height: 200 }}
                                    resizeMode="cover"
                                />
                            </YStack>
                        )}
                        <XStack justifyContent="space-between" marginTop="$3">
                            <Button
                                icon={MessageCircle}
                                size="$3"
                                chromeless
                                col="$gray11"
                                pressStyle={{ backgroundColor: '$blue1', col: '$blue10' }}
                                animation="quick"
                            >
                                {replies}
                            </Button>
                            <Button
                                icon={Repeat2}
                                size="$3"
                                chromeless
                                col="$gray11"
                                pressStyle={{ backgroundColor: '$green1', col: '$green10' }}
                                animation="quick"
                            >
                                {retweets}
                            </Button>
                            <Button
                                icon={Heart}
                                size="$3"
                                chromeless
                                col="$gray11"
                                pressStyle={{ backgroundColor: '$red1', col: '$red10' }}
                                animation="quick"
                            >
                                {likes}
                            </Button>
                            <Button
                                icon={BarChart2}
                                size="$3"
                                chromeless
                                col="$gray11"
                                pressStyle={{ backgroundColor: '$blue1', col: '$blue10' }}
                                animation="quick"
                            >
                                {views}
                            </Button>
                            <Button
                                icon={Share2}
                                size="$3"
                                chromeless
                                col="$gray11"
                                pressStyle={{ backgroundColor: '$blue1', col: '$blue10' }}
                                animation="quick"
                            />
                        </XStack>
                    </YStack>
                </XStack>
            </YStack>
        </MotiView>
    );
} 