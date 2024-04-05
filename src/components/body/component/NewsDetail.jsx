import Header from "../../Header";
import PropTypes from "prop-types";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import RightPart from "./RightPart";
import App from "../../../App";

export default function NewsDetail({ data }) {
    const { details, title, image_url } = data;
    console.log(title);
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4 p-4 gap-5">
                <div className="md:col-span-3">
                    <h1 className="text-2xl p-2">Dragon News</h1>
                    <div>
                        <div>
                            <img src={image_url} alt="" className="w-full" />
                        </div>
                        <h1 className="text-3xl font-black py-5">{title}</h1>
                        <p >{details}</p>
                        <div className="py-5">
                            <Link to="/news">
                                <button className="btn bg-[#D72050] rounded-none"><FaLongArrowAltLeft></FaLongArrowAltLeft> All news in this category</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <App></App>
                    </div>
                </div>
                <div>
                    <RightPart></RightPart>
                </div>

            </div>

        </div>
    )
}
NewsDetail.propTypes = {
    data: PropTypes.object
}