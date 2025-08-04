import { Text, Image, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Universitas Muhammadiyah Makassar</Text>
      
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Logo_Universitas_Muhammadiyah_Makassar_Resmi.jpg/1198px-Logo_Universitas_Muhammadiyah_Makassar_Resmi.jpg' }} 
        
        style={styles.logo}
      />
      
      <Text style={styles.label}>Lokasi:</Text>
      <Text style={styles.content}>Jl. Sultan Alauddin No. 259, Makassar, Sulawesi Selatan</Text>
      
      <Text style={styles.label}>Deskripsi:</Text>
      <Text style={styles.content}>
        Unismuh Makassar adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur, 
        berkomitmen untuk menghasilkan lulusan yang unggul dalam ilmu pengetahuan dan teknologi 
        dengan landasan nilai-nilai Islam.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    paddingHorizontal: 10,
  },
});
