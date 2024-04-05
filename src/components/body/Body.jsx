import LeftPart from "./component/LeftPart";
import MiddlePart from "./component/MiddlePart";
import RightPart from "./component/RightPart";

export default function Body() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div><LeftPart></LeftPart></div>
      <div className="lg:col-span-2"><MiddlePart></MiddlePart></div>
      <div><RightPart></RightPart></div>

    </div>
  )
}
