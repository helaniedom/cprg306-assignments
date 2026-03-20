"use client";

import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedItemName = item.name
            .split(",")[0]
            .trim()
            .replace(/[^a-zA-Z\s]/g, "");

        setSelectedItemName(cleanedItemName);
    };

    if (!user) {
        return (
            <main className="min-h-screen bg-slate-900 p-6">
                <h1 className="text-3xl font-bold text-red-300 mb-6">
                    Shopping List + Meal Ideas
                </h1>
                <p className="text-white">Access denied. Please log in first.</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-900 p-6">
            <h1 className="text-3xl font-bold text-red-300 mb-6">
                Shopping List + Meal Ideas
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}

