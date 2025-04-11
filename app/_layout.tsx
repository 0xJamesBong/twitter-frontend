import { Stack } from 'expo-router';
import { SafeAreaView, useWindowDimensions } from 'react-native';
import { TamaguiProvider, Theme, XStack, YStack } from 'tamagui';
import config from '../tamagui.config';
import { LeftSidebar } from '../components/LeftSidebar';
import { RightSidebar } from '../components/RightSidebar';

export default function Layout() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaView style={{ flex: 1 }}>
          <XStack flex={1}>
            {!isMobile && <LeftSidebar />}
            <YStack flex={1} maxWidth={600} marginHorizontal="auto">
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: { backgroundColor: 'white' },
                }}
              />
            </YStack>
            {!isMobile && <RightSidebar />}
          </XStack>
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  );
}
