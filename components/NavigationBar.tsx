import { Home, Search, Bell, Mail, User } from '@tamagui/lucide-icons';
import { Button, XStack } from 'tamagui';
import { Link } from 'expo-router';

export function NavigationBar() {
    return (
        <XStack
            backgroundColor="white"
            borderTopWidth={1}
            borderTopColor="$gray5"
            paddingVertical="$2"
            justifyContent="space-around"
        >
            <Link href="/" asChild>
                <Button icon={Home} size="$5" chromeless />
            </Link>
            <Link href="/search" asChild>
                <Button icon={Search} size="$5" chromeless />
            </Link>
            <Link href="/notifications" asChild>
                <Button icon={Bell} size="$5" chromeless />
            </Link>
            <Link href="/messages" asChild>
                <Button icon={Mail} size="$5" chromeless />
            </Link>
            <Link href="/profile" asChild>
                <Button icon={User} size="$5" chromeless />
            </Link>
        </XStack>
    );
} 