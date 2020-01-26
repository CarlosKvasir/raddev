import {
  getCurrentPositionAsync,
  requestPermissionsAsync,
} from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);
  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -16.6123413, longitude: -49.2224156 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://avatars2.githubusercontent.com/u/28787559?s=460&v=4',
          }}
        />
        <Callout>
          <View style={styles.callout}>
            <Text style={styles.devName}>Carlos Lima (Kvasir)</Text>
            <Text style={styles.devBio}>BIO S2</Text>
            <Text style={styles.devTechs}>ReactJs, RN, Node.js</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
});

export default Main;
