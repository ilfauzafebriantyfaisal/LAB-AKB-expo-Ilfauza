import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [imageStates, setImageStates] = useState(Array(9).fill(false));
  const [imageScales, setImageScales] = useState(Array(9).fill(1));

  const handleImagePress = (index: number) => {
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);

    const newImageScales = [...imageScales];
    newImageScales[index] =
      newImageScales[index] < 2 ? Math.min(newImageScales[index] + 0.2, 2) : 1;
    setImageScales(newImageScales);
  };

  const mainImages = [
    "https://simak.unismuh.ac.id/upload/mahasiswa/105841110222_.jpg",
    "https://picsum.photos/seed/1/200",
    "https://picsum.photos/seed/2/200",
    "https://picsum.photos/seed/3/200",
    "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif",
    "https://picsum.photos/seed/4/200",
    "https://picsum.photos/seed/5/200",
    "https://picsum.photos/seed/6/200",
    "https://picsum.photos/seed/7/200",
  ];

  const altImages = [
    "https://picsum.photos/seed/8/200",
    "https://picsum.photos/seed/9/200",
    "https://picsum.photos/seed/10/200",
    "https://picsum.photos/seed/11/200",
    "https://picsum.photos/seed/12/200",
    "https://picsum.photos/seed/13/200",
    "https://picsum.photos/seed/14/200",
    "https://picsum.photos/seed/15/200",
    "https://picsum.photos/seed/16/200",
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

        {/* Biodata */}
        <View style={{ backgroundColor: "lightgrey", padding: 10 }}>
          <Text style={{ fontSize: 20, color: "black" }}>105841110222</Text>
          <Text style={{ color: "red", fontWeight: "bold" }}>
            Ilfauza Febrianty Faisal
          </Text>
        </View>

        {/* Ornamen */}
        <View style={{ width: 20, height: 20, backgroundColor: "green", borderRadius: 100 }} />
        <View style={{
          width: 100, height: 180, backgroundColor: "goldenrod",
          borderRadius: 50, marginBottom: 20, alignSelf: "center",
          justifyContent: "center", alignItems: "center", marginTop: 20,
        }}>
          <Text style={{ fontSize: 13, fontWeight: "bold" }}>105841110222</Text>
        </View>

        <View style={{ width: 100, height: 50, backgroundColor: "goldenrod", marginBottom: 20 }}>
          <Text style={{
            fontSize: 10, fontWeight: "bold", color: "black",
            alignSelf: "center", marginTop: 18,
          }}>Ilfauza Febrianty Faisal</Text>
        </View>

        <View style={{
          borderLeftWidth: 50, borderRightWidth: 50, borderBottomWidth: 100,
          backgroundColor: 'transparent', borderRightColor: 'transparent',
          borderLeftColor: 'transparent', borderBottomColor: 'goldenrod',
        }} />

        {/* Grid Gambar */}
        <Text style={{
          fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 15,
        }}>
          Grid Gambar Interaktif
        </Text>

        <View style={{
          width: 320, // total lebar grid 3 kolom + margin
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
          {mainImages.map((main, index) => (
            <View
              key={index}
              style={{
                width: 100,
                height: 100,
                margin: 5,
                overflow: "hidden", // penting agar gambar yang membesar tetap di dalam kotak
              }}
            >
              <TouchableOpacity onPress={() => handleImagePress(index)}>
                <Image
                  source={{
                    uri: imageStates[index] ? altImages[index] : mainImages[index],
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    transform: [{ scale: imageScales[index] }],
                    borderRadius: 10,
                    borderColor: imageStates[index] ? "red" : "gray",
                    borderWidth: 2,
                    resizeMode: "cover",
                  }}
                  onError={() => {
                    console.warn(`Gambar ${index} gagal dimuat`);
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}