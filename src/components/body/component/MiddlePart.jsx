import { useEffect, useState } from "react"
import RootNews from "./RootNews";

export default function MiddlePart() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch("/news.json").then(res => res.json()).then(data => setNews(data));
    }, [])
    return (
        <div>
            <h1 className="text-xl font-semibold">Dragon News Home</h1>
            <div>
                {
                    news.map(singleNews => <RootNews key={singleNews._id} data={singleNews}></RootNews>)
                }
            </div>
        </div>
    )
}
