"use client";

import { useState, useMemo } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const categories = useMemo(
        () => [
            "produce",
            "dairy",
            "bakery",
            "meat",
            "frozen foods",
            "canned goods",
            "dry goods",
            "beverages",
            "snacks",
            "household",
            "other",
        ],
        []
    );

    function handleSubmit(event) {event.preventDefault();
        const trimmedName = name.trim();
        if (!trimmedName) return;

        const newItem = {
            id: crypto.randomUUID(),
            name: trimmedName,
            quantity,
            category,
        };

        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-slate-800 p-6 rounded-lg space-y-4">


            {/* Item Name */} 
            <div className="space-y-1">
                <label htmlFor="item-name" className="block text-sm text-slate-200">
                Item name
                </label>

                <input
                    id="item-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Item name"
                    required
                    className="w-full p-2 rounded-md"
                />
            </div>

            {/* Qty */}
            <div className="space-y-1">
                <label htmlFor="item-quantity" className="block text-sm text-slate-200">
                    Quantity
                </label>

                <input
                    id="item-quantity"
                    type="number"
                    min={1}
                    max={99}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full p-2 rounded-md"
                />
            </div>

            {/* Category */}
            <div className="w-1/2 space-y-1">
                <label htmlFor="item-category" className="block text-sm text-slate-200">
                    Category
                </label>
                <select
                    id="item-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 rounded-md bg-slate-700 text-white border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        
                    {categories.map((c) => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

        <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md text-xl">
            +
        </button>
        </form>
    );
}
