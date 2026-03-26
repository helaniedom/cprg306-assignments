export default function Item({ name, quantity, category, onSelect, onDelete }) {
    return (
        <li className="p-4 m-2 bg-slate-800 text-red-300 border border-blue-800 rounded flex justify-between items-center">
            <div onClick={onSelect} className="cursor-pointer">
                <p className="text-lg font-bold">{name}</p>
                <p>Quantity: {quantity}</p>
                <p className="capitalize">Category: {category}</p>
            </div>

            <button
                type="button"
                onClick={onDelete}
                className="ml-4 px-3 py-2 bg-slate-500 hover:bg-rose-500 active:bg-rose-700 text-white rounded text-sm transition-colors"
            >
                Delete
            </button>
        </li>
    );
}
