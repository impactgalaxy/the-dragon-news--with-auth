import { CiBookmarkCheck } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import { useState } from "react";
import { setValueToLocalStore } from "../../../utility/Utility";

export default function RootNews({ data }) {
    const { _id, rating, total_view, title, author, image_url, details } = data;
    const { name, published_date, img } = author;
    const [valueOfComment, setValueOfComment] = useState("");

    const getCommentFromUser = (e) => {
        let comment = e.target.value;
        setValueOfComment(comment);
    }
    const handleComment = () => {
        if (valueOfComment === "") {
            return alert("You must write something")
        }
        setValueToLocalStore(_id, valueOfComment);
        setValueOfComment("");
    }

    return (
        <div className="my-5 p-2">
            <div>
                <div className="flex justify-between items-center p-2 bg-slate-50 text-black">
                    <div className="flex items-center gap-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={img} />
                            </div>
                        </div>
                        <div >
                            <h1 className="text-xl font-bold">{name}</h1>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <CiBookmarkCheck className="text-3xl"></CiBookmarkCheck>
                        <IoShareSocialOutline className="text-2xl"></IoShareSocialOutline>
                    </div>
                </div>
                <div className="py-5 space-y-4 border-b-2">
                    <h1 className="text-xl font-black py-1">{title}</h1>
                    <div className="p-4">
                        <img src={image_url} alt={title} />
                    </div>
                    <p>{details.length > 200 ? details.slice(0, 200).concat("...") : details}</p>
                    <Link to={`/news/${_id}`} className="text-red-500 btn-ghost">Read More</Link>
                </div>
                <div className="flex justify-between items-center py-5">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <span className="text-2xl ml-2">{rating.number}</span>
                    </div>
                    <div className="flex gap-1">
                        <MdOutlineRemoveRedEye className="text-2xl"></MdOutlineRemoveRedEye>
                        <span>{total_view}</span>
                    </div>

                </div>
                <div className="p-2 relative border">
                    <input type="text" name="comment" onChange={getCommentFromUser} id="" className="input w-3/4 bg-slate-100 text-black" placeholder="comment" />
                    <button className="btn btn-accent absolute top-1/2 -translate-y-1/2 right-2" onClick={handleComment}>Comment</button>
                </div>
            </div>

        </div>)
}
RootNews.propTypes = {
    data: PropTypes.object
}