import { PlayersProvider } from "../context/playersContext"
import TestingComponent from "./testingComponent"

export default function Page() {
    return (
        <PlayersProvider>
            <TestingComponent />
        </PlayersProvider>
    ) 
}
