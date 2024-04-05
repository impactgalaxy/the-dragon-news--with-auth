import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom";
import NewsDetail from "../components/body/component/NewsDetail";

export default function NewsDetails() {
    const [news, setNews] = useState([]);
    const loader = useLoaderData();
    const { id } = useParams();

    console.log(loader, id);


    useEffect(() => {
        const filterNews = loader.filter(item => item._id === id);
        setNews(filterNews);
    }, [id, loader])

    console.log(news);
    return (
        <div>
            {
                news.map(singleNews => <NewsDetail key={singleNews._id} data={singleNews}></NewsDetail>)
            }

        </div>
    )
}
