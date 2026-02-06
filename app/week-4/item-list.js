import Item from "./item";
import items from "./items.json";

export default function ItemList() {
    const categories = [...new Set(items.map((item) => item.category))].sort();

    return (
        <div>
            {categories.map((category) => (
                <div key={category} className="mb-6">
                    <h2 className="text-xl font-bold mb-2 capitalize">{category}</h2>

                    <ul>
                        {items
                            .filter((item) => item.category === category)
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((item) => (
                                <Item key={item.id} {...item} />
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
