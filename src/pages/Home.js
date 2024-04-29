import react from "react"
import { useREIContext } from "../utils/reicontext"

function Home() {

    const { jackets, working, setJackets } = useREIContext()
    console.log("-----")
    console.log(jackets)
    console.log(working)
    console.log("-----")
    return (
        <div>
            <h1>{jackets[1].id}</h1>
            <h1>{jackets[1].brand}</h1>
            <h1>{jackets[1].sizes.map(function (item, i) {
                return <li key={i}>{item}</li>
            })
            }</h1>
        </div>
    )
}

export default Home;