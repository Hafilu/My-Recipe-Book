import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Mealdetails from "../Mealdetails";

function Mealitem({
  id,
  title,
  imageurl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("Meal Details", { mealid: id });
  }

  return (
    <View style={styles.mealitem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonpressed : null)}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: imageurl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Mealdetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
}

export default Mealitem;

const styles = StyleSheet.create({
  mealitem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  buttonpressed: {
    opacity: 0.5,
  },
});
