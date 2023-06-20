import {ReactNode, Suspense} from "react";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../store/store";

export const withRouter = (component: () => ReactNode) => () => (
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback="Loading...">
                {component()}
            </Suspense>
        </BrowserRouter>
    </Provider>
);
