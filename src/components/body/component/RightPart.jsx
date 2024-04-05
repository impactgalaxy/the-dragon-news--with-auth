import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";

export default function RightPart() {
    return (
        <div className="p-2">
            <div>
                <h1 className="text-xl font-semibold ">Login with</h1>
                <div className="py-4 space-y-3">
                    <button className="btn btn-outline w-full text-blue-700"><FcGoogle></FcGoogle>Login With Google</button>
                    <button className="btn btn-outline w-full"><FaGithub></FaGithub>Login With Github</button>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-semibold ">Find us on</h1>
                <div className="py-4">
                    <div className="flex items-center gap-2 p-3 rounded-t-lg rounded-b-none border"><TfiFacebook />Facebook</div>
                    <div className="flex items-center gap-2 p-3 border-x"><FaTwitter />Twitter</div>
                    <div className="flex items-center gap-2 p-3 rounded-b-lg rounded-t-none border"><FaInstagram />Instagram</div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-semibold ">Q Zone</h1>
                <div className="py-4 ">
                    <img src="/qZone/qZone1.png" alt="" />
                    <img src="/qZone/qZone2.png" alt="" />
                    <img src="/qZone/qZone3.png" alt="" />

                </div>
            </div>
            <div className="p-3 lg:p-10 text-center space-y-5 bg-[url('/bg.png')] bg-center bg-no-repeat bg-cover">
                <h1 className="text-2xl lg:text-4xl text-white">
                    Create an Amazing Newspaper
                </h1>
                <p className="text-white">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn bg-[#D72050] text-white font-bold text-xl">Learn More</button>
            </div>

        </div>
    )
}
