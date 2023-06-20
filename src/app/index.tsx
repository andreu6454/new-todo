import {withProviders} from "./providers";
import {Routing} from "../pages";
import Header from "../widgets/Header/Header";

const App = () => {
    return <div>
        <Header/>
        <Routing/>
    </div>
}

export default withProviders(App);