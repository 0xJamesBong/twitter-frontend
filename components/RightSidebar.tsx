import { Button, H4, Paragraph, XStack, YStack } from 'tamagui';
import { MoreHorizontal, Search } from '@tamagui/lucide-icons';

const trendingTopics = [
    { topic: 'Technology', tweets: '125K', category: 'Technology' },
    { topic: 'AI', tweets: '98K', category: 'Technology' },
    { topic: 'Web3', tweets: '75K', category: 'Technology' },
    { topic: 'Crypto', tweets: '62K', category: 'Finance' },
    { topic: 'React', tweets: '45K', category: 'Technology' },
];

const suggestedUsers = [
    {
        name: 'Elon Musk',
        handle: 'elonmusk',
        avatar: 'https://picsum.photos/200',
    },
    {
        name: 'Vitalik Buterin',
        handle: 'VitalikButerin',
        avatar: 'https://picsum.photos/201',
    },
    {
        name: 'Sam Altman',
        handle: 'sama',
        avatar: 'https://picsum.photos/202',
    },
];

export function RightSidebar() {
    return (
        <YStack
            width={300}
            padding="$4"
            borderLeftWidth={1}
            borderLeftColor="$gray5"
            space="$4"
        >
            <YStack backgroundColor="$gray1" borderRadius="$4" padding="$4" space="$4">
                <H4>What's happening</H4>
                {trendingTopics.map((topic, index) => (
                    <YStack key={index} space="$1">
                        <XStack justifyContent="space-between" alignItems="center">
                            <Paragraph color="$gray11" fontSize="$2">
                                {topic.category} · Trending
                            </Paragraph>
                            <Button icon={MoreHorizontal} size="$2" chromeless />
                        </XStack>
                        <Paragraph fontWeight="bold">{topic.topic}</Paragraph>
                        <Paragraph color="$gray11" fontSize="$2">
                            {topic.tweets} Tweets
                        </Paragraph>
                    </YStack>
                ))}
                <Button chromeless color="$blue10">
                    Show more
                </Button>
            </YStack>

            <YStack backgroundColor="$gray1" borderRadius="$4" padding="$4" space="$4">
                <H4>Who to follow</H4>
                {suggestedUsers.map((user, index) => (
                    <XStack key={index} justifyContent="space-between" alignItems="center">
                        <XStack space="$2" alignItems="center">
                            <Button
                                circular
                                size="$4"
                                backgroundColor="$gray5"
                                pressStyle={{ backgroundColor: '$gray6' }}
                            />
                            <YStack>
                                <Paragraph fontWeight="bold">{user.name}</Paragraph>
                                <Paragraph color="$gray11" fontSize="$2">
                                    @{user.handle}
                                </Paragraph>
                            </YStack>
                        </XStack>
                        <Button
                            backgroundColor="black"
                            color="white"
                            borderRadius="$10"
                            paddingHorizontal="$4"
                        >
                            Follow
                        </Button>
                    </XStack>
                ))}
                <Button chromeless color="$blue10">
                    Show more
                </Button>
            </YStack>

            <YStack space="$2">
                <XStack flexWrap="wrap" space="$2">
                    <Paragraph color="$gray11" fontSize="$2">
                        Terms of Service
                    </Paragraph>
                    <Paragraph color="$gray11" fontSize="$2">
                        Privacy Policy
                    </Paragraph>
                    <Paragraph color="$gray11" fontSize="$2">
                        Cookie Policy
                    </Paragraph>
                    <Paragraph color="$gray11" fontSize="$2">
                        Accessibility
                    </Paragraph>
                    <Paragraph color="$gray11" fontSize="$2">
                        Ads info
                    </Paragraph>
                    <Paragraph color="$gray11" fontSize="$2">
                        More
                    </Paragraph>
                </XStack>
                <Paragraph color="$gray11" fontSize="$2">
                    © 2024 X Corp.
                </Paragraph>
            </YStack>
        </YStack>
    );
} 