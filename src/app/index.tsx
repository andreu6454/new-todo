import {withProviders} from "./providers";
import {Routing} from "../pages";

const App = () => {
    return <div>
        <div className={'Header'}/>
        <Routing/>
    </div>
}

export default withProviders(App);