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
          <XStack flex={1} justifyContent="center" maxWidth={1265} marginHorizontal="auto">
            {!isMobile && (
              <XStack width={275}>
                <LeftSidebar />
              </XStack>
            )}
            <YStack flex={1} maxWidth={600} minWidth={600}>
              <Stack
                screenOptions={{
                  headerShown: false,
                  contentStyle: { backgroundColor: 'white' },
                }}
              />
            </YStack>
            {!isMobile && (
              <XStack width={290}>
                <RightSidebar />
              </XStack>
            )}
          </XStack>
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  );
}
