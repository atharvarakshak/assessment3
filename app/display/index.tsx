import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { asteroid } = route.params;
    
  return (
    <View>
      <Text>Name: {asteroid.name}</Text>
      <Text>NASA JPL URL: {asteroid.nasa_jpl_url}</Text>
      <Text>Is Potentially Hazardous: {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</Text>
    </View>
  );
};

export default DetailsScreen;
