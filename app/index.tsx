import React, { useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';

const fallbackImage = 'https://via.placeholder.com/100x100.png?text=Error';

const imageData = [
  {
    id: 1,
    mainSrc: 'https://i.pinimg.com/736x/cd/22/e5/cd22e5836bb4f9a0f25017fc6da064de.jpg',
    altSrc: 'https://cdn.kawaii.limited/products/60/60075/1/md/japan-disney-jacquard-towel-handkerchief-toy-story-lotso-colorful.jpg',
  },
  {
    id: 2,
    mainSrc: 'https://static.vecteezy.com/system/resources/previews/056/443/198/non_2x/pink-lotso-bear-free-vector.jpg',
    altSrc: 'http://hobiverse.com.vn/cdn/shop/files/mo-hinh-do-choi-52-toys-lotso-it-s-me-6958985023450_521f1b6da2a84e80ac793607b61d35f4_master_ed8e93d6-8596-46cf-ac4b-8055b6aaafa9.jpg?v=1751320233',
  },
  {
    id: 3,
    mainSrc: 'https://prod-eurasian-res.popmart.com/default/20250121_175134_448490____1_____1200x1200.jpg?x-oss-process=image/format,webp',
    altSrc: 'https://prod-america-res.popmart.com/default/20250115_110649_313854____1_disneypixar-lotso-wondrous-rendezvous-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg?x-oss-process=image/format,webp',
  },
  {
    id: 4,
    mainSrc: 'https://cdn.ruparupa.io/fit-in/850x850/filters:format(webp)/filters:watermark(content.ruparupa.io,products/wm/rr.png,0,-0,0,100,100)/ruparupa-com/image/upload/Products/10504279_1.jpg',
    altSrc: 'https://img.freepik.com/premium-vector/vector-cute-lotso-doll-holding-heart-cute-baby-teddy-bear-isolated-white-background_1136521-12.jpg',
  },
  {
    id: 5,
    mainSrc: 'https://www.toysruschina.com/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-master-catalog-toysrus/default/dwd39a7710/4/e/3/f/4e3fb630dc8107c5cc5cd7b3bdb413c7ee247dca_15474_i6.jpg?sw=500&sh=500&q=75',
    altSrc: 'https://cdn.store-assets.com/s/630301/i/49699464.jpeg?width=1024',
  },
  {
    id: 6,
    mainSrc: 'https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/4203041280620?fmt=jpeg&qlt=90&wid=608&hei=608',
    altSrc: 'https://m.media-amazon.com/images/I/51kXI6eKCvL.jpg',
  },
  {
    id: 7,
    mainSrc: 'https://down-id.img.susercontent.com/file/id-11134207-7r98p-lund8h1b3cnkc0',
    altSrc: 'https://st2.depositphotos.com/3266441/7497/i/950/depositphotos_74973801-stock-illustration-lotso-huggin-bear-figure-toy.jpg',
  },
  {
    id: 8,
    mainSrc: 'https://m.media-amazon.com/images/I/6107hAZ6guL._UF894,1000_QL80_.jpg',
    altSrc: 'https://images.bigbadtoystore.com/images/p/full/2025/01/0c56e4ab-04ff-44c2-9409-7dd60d486615.jpg',
  },
  {
    id: 9,
    mainSrc: 'http://toysez.com/cdn/shop/files/5_1_242a87d8-41bf-4437-bcb0-840e07d2136e.jpg?v=1747197964',
    altSrc: 'https://www.coleka.com/media/item/202501/03/doorables-remember-when-lil-moments-lotso-young-001.webp',
  },
];

export default function ImageGrid() {
  const [images, setImages] = useState(
    imageData.map((img) => ({
      ...img,
      isFlipped: false,
      scale: new Animated.Value(1),
      scaleNum: 1,
      hasError: false,
    }))
  );

  const handlePress = (id: number) => {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id === id) {
          const newScale = Math.min(img.scaleNum * 1.2, 2);
          Animated.timing(img.scale, {
            toValue: newScale,
            duration: 200,
            useNativeDriver: true,
          }).start();

          return {
            ...img,
            isFlipped: !img.isFlipped,
            scaleNum: newScale,
          };
        }
        return img;
      })
    );
  };

  const handleImageError = (id: number) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id ? { ...img, hasError: true } : img
      )
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.grid}>
        {images.map((img) => (
          <TouchableWithoutFeedback key={img.id} onPress={() => handlePress(img.id)}>
            <View style={styles.cell}>
              <Animated.Image
                source={{
                  uri: img.hasError
                    ? fallbackImage
                    : img.isFlipped
                    ? img.altSrc
                    : img.mainSrc,
                }}
                onError={() => handleImageError(img.id)}
                style={[styles.image, { transform: [{ scale: img.scale }] }]}
                resizeMode="cover"
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 330,
    justifyContent: 'center',
  },
  cell: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
