import { FlatList, StyleSheet, View } from "react-native";
import Mealitem from "./Mealitem";

 
function Mealslist({items}) {
    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealitemprop = {
          id: item.id,
          title: item.title,
          imageurl: item.imageUrl,
          duration: item.duration,
          complexity: item.complexity,
          affordability: item.affordability,
        };
        return <Mealitem {...mealitemprop} />;
      }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default Mealslist

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });