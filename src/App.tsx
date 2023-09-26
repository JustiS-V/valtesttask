import React from 'react';
import AppNavigation from "./ui/navigation/AppNavigation";
import {SafeAreaProvider} from "react-native-safe-area-context";

function App() {
  return (
    <SafeAreaProvider>
      <AppNavigation/>
    </SafeAreaProvider>
  );
}

export default App;
