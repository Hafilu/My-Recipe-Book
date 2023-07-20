import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Mealslist from "../components/mealslist/Mealslist";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/Favorites-context";

function FavoritesScreen() {
  const favmealscotext = useContext(FavoritesContext);
  const favmeals = MEALS.filter((meal)=>favmealscotext.ids.includes(meal.id));

  if (favmeals.length === 0){
    return(
        <View style={styles.rootcontainer}>
            <Text style={styles.text}>You have no favorite meals yet</Text>
        </View>
    );
  }

  return <Mealslist items={favmeals}/>
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootcontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    }
})
