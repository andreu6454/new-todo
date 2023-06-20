import { withProviders } from "./providers";
import {Routing} from "../pages";
import Checkbox from "../shared/Checkbox/Checkbox";

const App = () => {
    return <div>
        <Routing/>
    </div>
}

export default withProviders(App);