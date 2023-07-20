import { useLayoutEffect } from "react";
import Mealslist from "../components/mealslist/Mealslist";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function Mealoverviewscreen({ route, navigation }) {
  const catid = route.params.categoryid;

  const displayedmeals = MEALS.filter((mealsitem) => {
    return mealsitem.categoryIds.indexOf(catid) >= 0;
  });

  useLayoutEffect(() => {
    const categorytitle = CATEGORIES.find(
      (category) => category.id === catid
    ).title;
    navigation.setOptions({ title: categorytitle });
  }, [catid, navigation]);

 return <Mealslist items={displayedmeals}/>
}

export default Mealoverviewscreen;


