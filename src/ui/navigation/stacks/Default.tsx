import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {DefaultStackParamList} from "../../../types/type";
import Camera from "../../screens/camera/Camera";
import MapScreen from "../../screens/map/Map";

const Stack = createStackNavigator<DefaultStackParamList>();

function DefaultStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="map"
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="camera"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default DefaultStack;
