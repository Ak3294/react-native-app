import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function FlatList() {
  const data = [
    {
      id: 1,
      title: "Software Engineering",
      bookPrize: 242,
      imageLink:
        "https://plus.unsplash.com/premium_photo-1731690343060-65cdbebe4a13?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Data Structure and Algorithms",
      bookPrize: 224,
      imageLink:
        "https://images.unsplash.com/photo-1732613942657-61684c51eb55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    },
    {
      id: 3,
      title: "Big Data Analytics",
      bookPrize: 244,
      imageLink:
        "https://images.unsplash.com/photo-1732521028694-2c1908915495?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      bookPrize: 424,
      imageLink:
        "https://plus.unsplash.com/premium_photo-1732564236763-2eaab170bf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <View style={styles.wrapper}>
      <StatusBar style="auto" />

      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.productWrapper}>
            <Image source={{ uri: item.imageLink }} style={styles.pimage} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  productWrapper: {
    width: 200,
    height: 200,
    backgroundColor: "grey",
    marginRight: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  pimage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});
