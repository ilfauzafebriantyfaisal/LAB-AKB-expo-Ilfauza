import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function AboutScreen() {
    return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Tentang Aplikasi Ini</Text>
      <Text style={styles.content}>
        Aplikasi ini dibuat untuk memenuhi tugas praktikum Komputasi Bergerak. 
        Tujuan utamanya adalah untuk mendemonstrasikan implementasi navigasi tab menggunakan Expo Router.
      </Text>

      <Text style={styles.subheader}>Fungsi Halaman:</Text>
      
      <View style={styles.listItem}>
        <Text style={styles.bold}>• Home:</Text>
        <Text style={styles.itemContent}>Menampilkan informasi singkat mengenai Universitas Muhammadiyah Makassar.</Text>
      </View>
      
      <View style={styles.listItem}>
        <Text style={styles.bold}>• About:</Text>
        <Text style={styles.itemContent}>Memberikan penjelasan mengenai aplikasi ini, tujuannya, dan fungsi dari setiap halaman.</Text>
      </View>

      <View style={styles.listItem}>
        <Text style={styles.bold}>• Profil:</Text>
        <Text style={styles.itemContent}>Menampilkan data diri pribadi mahasiswa yang membuat aplikasi ini.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
  listItem: {
    marginBottom: 15,
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  itemContent: {
    fontSize: 16,
    lineHeight: 24,
  }
});