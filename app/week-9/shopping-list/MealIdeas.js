"use client";

import { useEffect, useState } from "react";


async function fetchMealIdeas(ingredient) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function loadMealIdeas() {
        if (!ingredient) {
            setMeals([]);
            setError(null);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            {!ingredient ? (
                <>
                    <h2 className="mb-3">Meal ideas (select an item)</h2>
                    <p className="text-gray-400">Choose an item to see ideas.</p>
                </>
            ) : (
                <>
                    <h2 className="mb-3">Meal ideas for "{ingredient}"</h2>

                    {loading ? (
                        <p className="text-gray-400">Loading...</p>
                    ) : error ? (
                        <p className="text-red-400">Error: {error}</p>
                    ) : meals.length === 0 ? (
                        <p className="text-gray-400">No meals found.</p>
                    ) : (
                        <ul className="space-y-1">
                            {meals.map((meal) => (
                                <li key={meal.idMeal}>
                                    {meal.strMeal}
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
}
