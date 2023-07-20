import { useContext, useLayoutEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Iconbutton from "../components/Iconbutton";
import List from "../components/mealdetail/List";
import Subtitle from "../components/mealdetail/Subtitle";
import Mealdetails from "../components/Mealdetails";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/Favorites-context";

function Mealdetailscreen({ route, navigation }) {
  const favmealscontext = useContext(FavoritesContext)
  const mealid = route.params.mealid;
  const selectedmeal = MEALS.find((meal) => meal.id === mealid);
  const mealisfav = favmealscontext.ids.includes(mealid);

  function changeFavoriteStatusHandler() {
     if(mealisfav){
      favmealscontext.removeFavorites(mealid);
     }else{
      favmealscontext.addFavorites(mealid);
     }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Iconbutton
            icon={mealisfav? "star": "star-outline"}
            color={"white"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootcontainer}>
      <Image style={styles.image} source={{ uri: selectedmeal.imageUrl }} />
      <Text style={styles.title}>{selectedmeal.title}</Text>
      <Mealdetails
        duration={selectedmeal.duration}
        complexity={selectedmeal.complexity}
        affordability={selectedmeal.affordability}
        textstyle={styles.detailtext}
      />
      <View style={styles.listoutercontainer}>
        <View style={styles.listcontainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedmeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedmeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Mealdetailscreen;

const styles = StyleSheet.create({
  rootcontainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailtext: {
    color: "white",
  },
  listoutercontainer: {
    alignItems: "center",
  },
  listcontainer: {
    width: "80%",
  },
});
