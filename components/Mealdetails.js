import { StyleSheet, Text, View } from "react-native";

function Mealdetails({duration, complexity, affordability, textstyle}) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailitem, textstyle]}>{duration}m</Text>
      <Text style={[styles.detailitem, textstyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailitem, textstyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default Mealdetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      },
      detailitem: {
        marginHorizontal: 4,
        fontSize: 15,
      },
})
