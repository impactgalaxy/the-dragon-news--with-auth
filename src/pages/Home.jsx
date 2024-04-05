import Body from "../components/body/Body"
import Marquees from "../components/body/component/Marquees"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

function Home() {
    return (
        <div>
            <Header></Header>
            <Marquees></Marquees>
            <Navbar></Navbar>
            <Body></Body>
        </div>
    )
}

export default Home
