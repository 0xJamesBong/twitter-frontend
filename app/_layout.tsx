import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';
import { NavigationBar } from '../components/NavigationBar';

export default function Layout() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaView style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: 'white' },
            }}
          />
          <NavigationBar />
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  );
}
