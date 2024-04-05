import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function Marquees() {
    return (
        <div className="flex items-center py-4 bg-[#F3F3F3] p-2">
            <button className="btn bg-[#D72050] text-white rounded-none border-none">Latest</button>
            <Marquee

                pauseOnHover={true}
            >
                <Link to="/#" className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, placeat veniam earum vero porro dolor voluptatum quidem culpa reiciendis. Illo nihil placeat rem voluptatum eius recusandae veniam</Link>
            </Marquee>

        </div>
    )
}
