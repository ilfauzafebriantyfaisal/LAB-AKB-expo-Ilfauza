import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const imageData = [
  {
    id: 1,
    src: 'https://i.pinimg.com/736x/cd/22/e5/cd22e5836bb4f9a0f25017fc6da064de.jpg',
  },
  {
    id: 2,
    src: 'https://cdn.kawaii.limited/products/60/60075/1/md/japan-disney-jacquard-towel-handkerchief-toy-story-lotso-colorful.jpg',
  },
  {
    id: 3,
    src: 'https://prod-eurasian-res.popmart.com/default/20250121_175134_448490____1_____1200x1200.jpg?x-oss-process=image/format,webp',
  },
  {
    id: 4,
    src: 'https://cdn.ruparupa.io/fit-in/850x850/filters:format(webp)/filters:watermark(content.ruparupa.io,products/wm/rr.png,0,-0,0,100,100)/ruparupa-com/image/upload/Products/10504279_1.jpg',
  },
  {
    id: 5,
    src: 'https://www.toysruschina.com/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-master-catalog-toysrus/default/dwd39a7710/4/e/3/f/4e3fb630dc8107c5cc5cd7b3bdb413c7ee247dca_15474_i6.jpg?sw=500&sh=500&q=75',
  },
  {
    id: 6,
    src: 'https://m.media-amazon.com/images/I/51kXI6eKCvL.jpg',
  },
  {
    id: 7,
    src: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-lund8h1b3cnkc0',
  },
  {
    id: 8,
    src: 'https://m.media-amazon.com/images/I/6107hAZ6guL._UF894,1000_QL80_.jpg',
  },
  {
    id: 9,
    src: 'https://popcollectibles.ca/cdn/shop/files/v-lotso-still-980190.jpg?v=1735449293',
  },
];

export default function ImageGrid() {
  const [images, setImages] = useState(
    imageData.map((img) => ({
      ...img,
      scale: new Animated.Value(1),
      scaleNum: 1,
    }))
  );

  const handlePress = (id: number) => {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id === id) {
          const newScaleNum = Math.min(img.scaleNum * 1.2, 2);
          Animated.timing(img.scale, {
            toValue: newScaleNum,
            duration: 200,
            useNativeDriver: true,
          }).start();
          return { ...img, scaleNum: newScaleNum };
        }
        return img;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {images.map((img) => (
          <TouchableWithoutFeedback key={img.id} onPress={() => handlePress(img.id)}>
            <Animated.Image
              source={{ uri: img.src }}
              style={[styles.image, { transform: [{ scale: img.scale }] }]}
              resizeMode="cover"
            />
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 330,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});
