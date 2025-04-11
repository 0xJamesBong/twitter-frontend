import { Link } from 'expo-router';
import { Button, H4, XStack, YStack } from 'tamagui';
import {
    Home,
    Search,
    Bell,
    Mail,
    Bookmark,
    List,
    Users,
    CheckCircle,
    User,
    MoreHorizontal,
} from '@tamagui/lucide-icons';

const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Explore', href: '/explore' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: Mail, label: 'Messages', href: '/messages' },
    { icon: Bookmark, label: 'Bookmarks', href: '/bookmarks' },
    { icon: List, label: 'Lists', href: '/lists' },
    { icon: Users, label: 'Communities', href: '/communities' },
    { icon: CheckCircle, label: 'Verified', href: '/verified' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: MoreHorizontal, label: 'More', href: '/more' },
];

export function LeftSidebar() {
    return (
        <YStack
            width={275}
            padding="$4"
            borderRightWidth={1}
            borderRightColor="$gray5"
            space="$4"
        >
            <XStack padding="$4">
                <H4>𝕏</H4>
            </XStack>
            <YStack space="$2">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} asChild>
                        <Button
                            icon={item.icon}
                            size="$5"
                            chromeless
                            justifyContent="flex-start"
                            padding="$4"
                            pressStyle={{ backgroundColor: '$gray1' }}
                            animation="quick"
                        >
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </YStack>
            <Button
                backgroundColor="$blue10"
                color="white"
                borderRadius="$10"
                marginTop="$4"
                paddingVertical="$4"
                animation="quick"
            >
                Post
            </Button>
        </YStack>
    );
} 