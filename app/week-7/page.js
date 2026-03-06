"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [lastAddedItem, setLastAddedItem] = useState(null);

    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev, newItem]);
        setLastAddedItem(newItem);
    };

    return (
        <main className="min-h-screen bg-slate-900 p-6">
            <h1 className="text-3xl font-bold text-red-300 mb-6">Shopping List</h1>

            <NewItem onAddItem={handleAddItem} />

            {lastAddedItem && (
                <section className="max-w-md mx-auto mt-4 p-4 rounded border border-slate-600 bg-slate-800 text-slate-100">
                    <h2 className="text-lg font-bold mb-2">Last item added</h2>
                    <p>
                        <span className="font-semibold">Name:</span> {lastAddedItem.name}
                    </p>
                    <p>
                        <span className="font-semibold">Quantity:</span>{" "}
                        {lastAddedItem.quantity}
                    </p>
                    <p className="capitalize">
                        <span className="font-semibold">Category:</span>{" "}
                        {lastAddedItem.category}
                    </p>
                </section>
            )}

            <ItemList items={items} />
        </main>
    );
}