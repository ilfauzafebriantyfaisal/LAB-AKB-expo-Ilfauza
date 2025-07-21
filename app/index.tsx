import { ScrollView, StyleSheet, Text, View } from "react-native";

// 🔡 Daftar nama lengkap beserta stambuk
const daftarNama = [
  "DINDA SAFITRI - 105841109322",
  "MUH. FARREL APTA INDRATAMA - 105841109422",
  "FAUZAN AZHARI RAHMAN - 105841109622",
  "MUH. FADHIL AHMAD - 105841109722",
  "DAYANG AISYAH - 105841109822",
  "ILFAUZA FEBRIANTY FAISAL - 105841110222", // Target
  "SA'BAN - 105841110322",
  "NUR FADILLAH SARI - 105841110422",
  "WA NANDA SULYSTRIAN - 105841110622",
  "MUH. TEGAR AL FIKRI - 105841110722",
];

const posisiUtama = 5;
const jumlahNama = daftarNama.length;

// ⏪ Ambil 5 nama sebelum
const namaSebelum = [];
for (let i = 5; i >= 1; i--) {
  const idx = (posisiUtama - i + jumlahNama) % jumlahNama;
  namaSebelum.push(daftarNama[idx]);
}

// ⏩ Ambil 5 nama setelah
const namaSetelah = [];
for (let i = 1; i <= 5; i++) {
  const idx = (posisiUtama + i) % jumlahNama;
  namaSetelah.push(daftarNama[idx]);
}

// Gabungkan, lalu hapus duplikat jika ada
const daftarGabungan = [...namaSebelum, daftarNama[posisiUtama], ...namaSetelah];
const daftarFinal = daftarGabungan.filter(
  (item, index, self) => self.indexOf(item) === index
);

// Font
const jenisFont = [
  "AbrilFatface-Regular",
  "BowlbyOne-Regular",
  "Michroma-Regular",
  "Play-Regular",
  "Shojumaru-Regular",
  "Montserrat-Variable",
  "Raleway-Variable",
  "Roboto-Variable",
  "Rubik-Variable",
  "TikTokSans-Variable",
];

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={gaya.kontainer}>
      <Text style={gaya.judul}>📘 10 Nama Berdasarkan Urutan Stambuk</Text>

      {[0, 1].map((baris) => (
        <View key={baris} style={gaya.baris}>
          {daftarFinal.slice(baris * 5, baris * 5 + 5).map((itemNama, index) => {
            const globalIndex = baris * 5 + index;
            const sorot = itemNama.toLowerCase().includes("ilfauza");

            return (
              <View
                key={globalIndex}
                style={[gaya.kartu, sorot && gaya.kartuSorot]}
              >
                <Text
                  style={[
                    gaya.nama,
                    {
                      fontFamily: jenisFont[globalIndex],
                      color: sorot ? "#b02a2a" : "#1e1e1e",
                      fontWeight: sorot ? "bold" : "normal",
                      fontSize: sorot ? 17 : 15,
                    },
                  ]}
                >
                  {itemNama}
                </Text>
                <Text style={gaya.fontLabel}>{jenisFont[globalIndex]}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
}

const gaya = StyleSheet.create({
  kontainer: {
    paddingVertical: 36,
    paddingHorizontal: 16,
    backgroundColor: "#f9fafb",
  },
  judul: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
    color: "#264653",
  },
  baris: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  kartu: {
    width: "18%",
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    alignItems: "center",
  },
  kartuSorot: {
    backgroundColor: "#ffe8cc",
    borderWidth: 1,
    borderColor: "#f77f00",
  },
  nama: {
    textAlign: "center",
  },
  fontLabel: {
    fontSize: 10,
    color: "#6c757d",
    marginTop: 4,
    textAlign: "center",
  },
});
