import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

export default function ProfilScreen() {
    return (
         <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Profil Mahasiswa</Text>
      
      <Image 
        source={require('../../assets/images/foto-profil.png')} 
        style={styles.profileImage}
      />
      
      <View style={styles.infoRow}>
        <Text style={styles.label}>Nama Lengkap:</Text>
        <Text style={styles.value}>Muh. Tegar Al Fikri</Text>
      </View>
      
      <View style={styles.infoRow}>
        <Text style={styles.label}>NIM:</Text>
        <Text style={styles.value}>105841110722</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Kelas:</Text>
        <Text style={styles.value}>C</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Jurusan:</Text>
        <Text style={styles.value}>Teknik Informatika</Text>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Fakultas:</Text>
        <Text style={styles.value}>Teknik</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    borderWidth: 3,
    borderColor: 'blue',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  }
});
