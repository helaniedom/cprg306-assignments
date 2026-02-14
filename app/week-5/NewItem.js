"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value));
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);
        alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-slate-800 p-6 rounded-lg space-y-4"
        >
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                required
                placeholder="Item name"
                className="w-full p-2 rounded-md"
            />

            <div className="flex gap-4">
                <input
                    type="number"
                    min={1}
                    max={99}
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-1/2 p-2 rounded-md"
                />

                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-1/2 p-2 rounded-md bg-slate-700 text-white border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >

                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-md text-xl"
            >
                +
            </button>
        </form>
    );
}
