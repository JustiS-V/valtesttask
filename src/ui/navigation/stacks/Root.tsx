import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from "../../../types/type";
import DefaultStack from "./Default";

const RootStack = createStackNavigator<RootStackParamList>();

function Root() {
  return (
    <RootStack.Navigator
      initialRouteName="default"
    >
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="default"
        component={DefaultStack}
      />
    </RootStack.Navigator>
  );
}

export default Root;
