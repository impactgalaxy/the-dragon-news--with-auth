import moment from "moment";
import logo from "../assets/images/logo.png";
function Header() {
    return (
        <div className="text-center p-4 space-y-4">
            <img src={logo} alt="The dragon logo" className="block m-auto" />
            <p className="text-xl">Journalism Without Fear or Favour</p>
            <p><span className="font-bold">{moment().format(`dddd`)}</span>, <span>{moment().format("MMMM D, YYYY")}</span>
            </p>



        </div>
    )
}

export default Header
