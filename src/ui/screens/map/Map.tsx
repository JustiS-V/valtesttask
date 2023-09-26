import React, {useState} from 'react';
import {Dimensions, Text, TouchableOpacity, View,} from 'react-native';
import MapView from "react-native-maps";

const {width, height} = Dimensions.get('window');

function MapScreen() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MapView
        onLongPress={(e) => {
          setShowModal(true);
          console.log(e.nativeEvent.coordinate)
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {
        true &&
        // showModal &&
          <View style={{
            backgroundColor: 'grey',
            width: width * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            borderRadius: 20,
          }}>
              <Text>Use Image from</Text>
              <View style={{height: 20}}/>
              <View style={{flexDirection: 'row', alignItems:'center'}}>
              <TouchableOpacity
                  style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 10}}
              >
                  <Text>Camera</Text>
              </TouchableOpacity>
              <View style={{width: 10}}/>
                  <Text>or</Text>
              <View style={{width: 10}}/>
              <TouchableOpacity
                  style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 10}}
              >
                  <Text>Gallery</Text>
              </TouchableOpacity>
          </View>
              <View style={{height: 15}}/>
              <TouchableOpacity
                  style={{paddingHorizontal: 20, paddingVertical: 10, backgroundColor: '#fff', borderRadius: 10}}
              >
                  <Text>Cancel</Text>
              </TouchableOpacity>
          </View>
      }
    </View>
  );
};

export default MapScreen;
