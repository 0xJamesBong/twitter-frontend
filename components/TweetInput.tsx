import { Image } from 'react-native';
import { Button, Input, Paragraph, XStack, YStack } from 'tamagui';
import { Image as ImageIcon, Smile } from '@tamagui/lucide-icons';

interface TweetInputProps {
    avatarUrl?: string;
    onTweet: (content: string) => void;
}

export function TweetInput({
    avatarUrl = 'https://picsum.photos/200',
    onTweet,
}: TweetInputProps) {
    return (
        <YStack
            padding="$4"
            borderBottomWidth={1}
            borderBottomColor="$gray5"
            space="$3"
        >
            <XStack space="$3">
                <Image
                    source={{ uri: avatarUrl }}
                    style={{ width: 48, height: 48, borderRadius: 24 }}
                />
                <YStack flex={1} space="$2">
                    <Input
                        placeholder="What's happening?"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        fontSize="$5"
                    />
                    <XStack justifyContent="space-between" alignItems="center">
                        <XStack space="$2">
                            <Button icon={ImageIcon} size="$3" chromeless color="$blue10" />
                            <Button icon={Smile} size="$3" chromeless color="$blue10" />
                        </XStack>
                        <XStack space="$2" alignItems="center">
                            <Paragraph color="$gray11">280</Paragraph>
                            <Button
                                backgroundColor="$blue10"
                                color="white"
                                borderRadius="$10"
                                paddingHorizontal="$4"
                            >
                                Tweet
                            </Button>
                        </XStack>
                    </XStack>
                </YStack>
            </XStack>
        </YStack>
    );
} 