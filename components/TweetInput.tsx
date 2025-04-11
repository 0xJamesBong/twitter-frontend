import { Image } from 'react-native';
import { Button, Input, Paragraph, XStack, YStack } from 'tamagui';
import {
    Image as ImageIcon,
    Smile,
    BarChart2,
    Globe,
    X,
} from '@tamagui/lucide-icons';
import { useState } from 'react';

interface TweetInputProps {
    avatarUrl?: string;
    onTweet: (content: string) => void;
}

export function TweetInput({
    avatarUrl = 'https://picsum.photos/200',
    onTweet,
}: TweetInputProps) {
    const [content, setContent] = useState('');
    const remainingChars = 280 - content.length;
    const isDisabled = content.length === 0 || content.length > 280;

    return (
        <YStack
            padding="$4"
            borderBottomWidth={1}
            borderBottomColor="$gray5"
            space="$3"
        >
            <XStack space="$3">
                <Button
                    circular
                    size="$4"
                    backgroundColor="$gray5"
                    pressStyle={{ backgroundColor: '$gray6' }}
                />
                <YStack flex={1} space="$2">
                    <Input
                        placeholder="What's happening?"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                        fontSize="$5"
                        value={content}
                        onChangeText={setContent}
                    />
                    <XStack justifyContent="space-between" alignItems="center">
                        <XStack space="$2">
                            <Button icon={ImageIcon} size="$3" chromeless col="$blue10" />
                            <Button icon={Smile} size="$3" chromeless col="$blue10" />
                            <Button icon={BarChart2} size="$3" chromeless col="$blue10" />
                            <Button icon={Globe} size="$3" chromeless col="$blue10" />
                        </XStack>
                        <XStack space="$2" alignItems="center">
                            <Paragraph
                                color={remainingChars < 0 ? '$red10' : '$gray11'}
                                fontSize="$2"
                            >
                                {remainingChars}
                            </Paragraph>
                            <Button
                                backgroundColor={isDisabled ? '$gray5' : '$blue10'}
                                color="white"
                                borderRadius="$10"
                                paddingHorizontal="$4"
                                disabled={isDisabled}
                                onPress={() => {
                                    onTweet(content);
                                    setContent('');
                                }}
                            >
                                Post
                            </Button>
                        </XStack>
                    </XStack>
                </YStack>
            </XStack>
        </YStack>
    );
} 