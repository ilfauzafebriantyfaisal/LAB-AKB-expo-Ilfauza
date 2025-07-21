import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';

const IconScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>10 Ikon Berbeda</Text>

      <View style={styles.iconColumn}>
        <AntDesign name="home" size={30} color="#4A90E2" style={styles.icon} />
        <Entypo name="rocket" size={30} color="#E74C3C" style={styles.icon} />
        <FontAwesome name="car" size={30} color="#2ECC71" style={styles.icon} />
        <MaterialIcons name="email" size={30} color="#9B59B6" style={styles.icon} />
        <Feather name="camera" size={30} color="#F39C12" style={styles.icon} />
        <AntDesign name="calendar" size={30} color="#16A085" style={styles.icon} />
        <Entypo name="game-controller" size={30} color="#2980B9" style={styles.icon} />
        <FontAwesome name="bicycle" size={30} color="#8E44AD" style={styles.icon} />
        <MaterialIcons name="wifi" size={30} color="#D35400" style={styles.icon} />
        <Feather name="moon" size={30} color="#34495E" style={styles.icon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  iconColumn: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    marginVertical: 10,
  },
});

export default IconScreen;
