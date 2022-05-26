import React from "react";
import Card from "../UI/Card";
import styling from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const meals = [
  {
    id: "m1",
    name: "Kadhai Paneer",
    description:
      "delicious spicy paneer recipe made with fresh ground kadai masala, paneer, onions, tomatoes & bell peppers.",
    price: 250,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 240,
  },
  {
    id: "m3",
    name: "Dal Makhani",
    description: "North Indian Punjabi cuisine made with Whole Black Lentils",
    price: 240,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 180,
  },
];

const AvailableMeals = () => {
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styling.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
