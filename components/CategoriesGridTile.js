import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoriesGridTile({ title, color, onPress }) {
  return (
    <View style={styles.griditem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonpressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innercontainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoriesGridTile;

const styles = StyleSheet.create({
  griditem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    height: 150,
    overflow: "hidden",
  },

  button: {
    flex: 1,
  },

  buttonpressed: {
    opacity: 0.5,
  },

  innercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
