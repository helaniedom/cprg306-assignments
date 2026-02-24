"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (
        <main className="min-h-screen bg-slate-900 p-6">
            <h1 className="text-3xl font-bold text-red-300 mb-6">Shopping List</h1>

            <NewItem onAddItem={handleAddItem} />

            <ItemList items={items} />
        </main>
    );
}