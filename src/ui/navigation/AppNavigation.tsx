import 'react-native-gesture-handler';
import React, {useRef} from 'react';
import {
  useNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import Root from "./stacks/Root";
import {RootStackParamList} from "../../types/type";

interface IAppNavigation {
}

const AppNavigation = ({
                         ...rest
                       }: IAppNavigation) => {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const routeNameRef = useRef<string>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef?.getCurrentRoute()?.name;
        routeNameRef.current = currentRouteName;
      }}>
      <Root {...rest} />
    </NavigationContainer>
  );
};

export default AppNavigation;
