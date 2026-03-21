"use client";

import { useMemo, useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name"); // "name" | "category" | "group"

    const categories = [...new Set(items.map((item) => item.category))].sort();

    const sortedItems = useMemo(() => {
        const copy = [...items];

        copy.sort((a, b) => {
            if (sortBy === "category") {
                return a.category.localeCompare(b.category);
            }
            return a.name.localeCompare(b.name);
        });

        return copy;
    }, [items, sortBy]);

    function SortButton({ value, children }) {
        const isActive = sortBy === value;

        return (
            <button
                type="button"
                onClick={() => setSortBy(value)}
                className={`px-3 py-1 rounded border transition-colors ${
                    isActive
                        ? "bg-slate-700 text-white border-slate-500"
                        : "bg-black text-gray-300 border-gray-700 hover:bg-gray-900"
                }`}
            >
                {children}
            </button>
        );
    }

    return (
        <section className="mt-8">
            <div className="flex flex-wrap gap-2 mb-4">
                <SortButton value="name">Sort by Name</SortButton>
                <SortButton value="category">Sort by Category</SortButton>
                <SortButton value="group">Group by Category</SortButton>
            </div>

            {sortBy !== "group" ? (
                <ul>
                    {sortedItems.map((item) => (
                        <Item 
                            key={item.id} 
                            {...item} 
                            onSelect={() => onItemSelect(item)}
                        />
                    ))}
                </ul>
            ) : (
                <div>
                    {categories.map((category) => (
                        <div key={category} className="mb-6">
                            <h2 className="text-xl font-bold mb-2 capitalize text-slate-200">
                                {category}
                            </h2>

                            <ul>
                                {items
                                    .filter((item) => item.category === category)
                                    .sort((a, b) => a.name.localeCompare(b.name))
                                    .map((item) => (
                                        <Item 
                                            key={item.id} 
                                            {...item} 
                                            onSelect={() => onItemSelect(item)}
                                        />
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
