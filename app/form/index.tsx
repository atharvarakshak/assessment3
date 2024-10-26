import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { fetchAsteroidInfo, fetchAsteroids } from '../../api/nasaApi';

const HomeScreen = ({ navigation }) => {
  const [asteroidId, setAsteroidId] = useState('');

  const handleSubmit = async () => {
    if (!asteroidId) return;
// sdnfs,mfsf,
    try {
      const asteroidInfo = await fetchAsteroidInfo(asteroidId);
      navigation.navigate('Details', { asteroid: asteroidInfo });
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch asteroid information.');
    }
  };

  const handleBrowse = async () => {
    try {
      const asteroids = await fetchAsteroids();
      const randomAsteroid = asteroids.near_earth_objects[Math.floor(Math.random() * asteroids.near_earth_objects.length)];
      navigation.navigate('Details', { asteroid: randomAsteroid });
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch asteroid information.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Asteroid ID"
        value={asteroidId}
        onChangeText={setAsteroidId}
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={!asteroidId}
      />
      <Button
        title="Browse Asteroids"
        onPress={handleBrowse}
      />
    </View>
  );
};

export default HomeScreen;
