export default function Item({ name, quantity, category }) {
    return (
        <li className="p-4 m-2 bg-slate-800 text-red-300 border border-blue-800 rounded">
            <p className="text-lg font-bold">{name}</p>

            <p>Quantity: {quantity}</p>
            
            <p className="capitalize">Category: {category}</p>
        </li>
    );
}
