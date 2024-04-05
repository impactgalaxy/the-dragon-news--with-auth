import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function LeftPart() {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch("/categories.json")
            .then(res => res.json())
            .then(data => setCategory(data));
    }, [])
    return (
        <div className="p-2 space-y-4">
            <h1 className="text-xl font-semibold">All Categories</h1>
            <div className="*:block  space-y-3">
                {
                    category.map(item => <Link key={item.id} to="##" className="p-2 hover:bg-slate-50 text-neutral-400 hover:text-black">{item.name}</Link>)
                }

            </div>

        </div>
    )
}
