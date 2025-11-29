import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Button, I18nManager, StatusBar, Text, View } from 'react-native';
import RNRestart from 'react-native-restart';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  function toggle() {
    I18nManager.forceRTL(!I18nManager.isRTL);
    I18nManager.allowRTL(true);

    RNRestart.restart();
  }

  return (
    <View>
      <Text>Home screen</Text>

      <Button
        title={I18nManager.isRTL ? 'Force LTR' : 'Force RTL'}
        onPress={toggle}
      />
    </View>
  );
}

const notWorkingOptions: NativeStackNavigationOptions = {
  headerTitle: () => (
    <View>
      <Text>Elo elo</Text>
    </View>
  ),
  headerRight: () => (
    <View>
      <Text>Right</Text>
    </View>
  ),
  headerTitleAlign: 'center',
};

const workingOptionsWithStaticTitle: NativeStackNavigationOptions = {
  headerTitle: 'Elo elo',
  headerRight: () => (
    <View>
      <Text>Right</Text>
    </View>
  ),
  headerTitleAlign: 'center',
};

const workaroundOptions: NativeStackNavigationOptions = {
  headerTitle: () => (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Header title</Text>
    </View>
  ),
  headerRight: () => (
    <View>
      <Text>Right</Text>
    </View>
  ),
};

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={notWorkingOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />

      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
